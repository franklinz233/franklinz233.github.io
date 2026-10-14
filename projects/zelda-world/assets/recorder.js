import { Muxer, ArrayBufferTarget } from './vendor/mp4-muxer.mjs';

// Capture the painted canvas through a stream: WebGL may discard its drawing
// buffer after presenting, so reading the game canvas in a separate RAF is unsafe.
const FPS = 30;
const MAX_SECONDS = 300;
const MAX_BYTES = 128 * 1024 * 1024;
const canvas = document.getElementById('view');
const panel = document.createElement('section');
panel.id = 'world-recorder';
panel.setAttribute('aria-label', '游戏录屏');
panel.innerHTML = `
  <div class="rec-row">
    <span class="rec-dot" aria-hidden="true"></span>
    <span class="rec-time">MP4 录屏</span>
    <button type="button" disabled title="F8 开始或停止录屏">准备中…</button>
  </div>
  <p class="rec-note">F8 开始 / 停止 · 最高 720p / 30 帧<br>仅游戏画面，无声音和 HUD · 最长 5 分钟</p>
  <div class="rec-status" role="status" aria-live="polite"></div>
  <a hidden>下载 MP4</a>`;
document.body.appendChild(panel);
const button = panel.querySelector('button');
const timer = panel.querySelector('.rec-time');
const status = panel.querySelector('.rec-status');
const download = panel.querySelector('a');
let state = 'idle';
let session = null;
let objectURL = null;

function setState(next) {
  state = next;
  panel.dataset.state = next;
  button.disabled = next === 'starting' || next === 'exporting';
  button.textContent = { idle: '开始录屏', starting: '准备中…', recording: '停止并导出', exporting: '导出中…' }[next];
  if (next === 'idle') timer.textContent = 'MP4 录屏';
}

function dimensions() {
  const ratio = Math.min(1, 1280 / canvas.width, 720 / canvas.height);
  return { width: Math.max(2, Math.floor(canvas.width * ratio / 2) * 2), height: Math.max(2, Math.floor(canvas.height * ratio / 2) * 2) };
}

function nativeMime() {
  if (!window.MediaRecorder || !canvas.captureStream) return null;
  return ['video/mp4;codecs=avc1.42E01E', 'video/mp4;codecs=avc1', 'video/mp4']
    .find(type => MediaRecorder.isTypeSupported(type));
}

async function encodingConfig(size) {
  if (!window.VideoEncoder || !window.VideoFrame) return null;
  for (const codec of ['avc1.42001f', 'avc1.4d001f']) {
    const config = { codec, ...size, bitrate: 4_000_000, framerate: FPS, latencyMode: 'realtime', avc: { format: 'avc' } };
    try {
      const support = await VideoEncoder.isConfigSupported(config);
      if (support.supported) return support.config;
    } catch { /* Try the next H.264 profile. */ }
  }
  return null;
}

function cleanup(current) {
  clearInterval(current.interval);
  clearTimeout(current.limit);
  if (current.callback != null) {
    if (current.video.cancelVideoFrameCallback) current.video.cancelVideoFrameCallback(current.callback);
    else cancelAnimationFrame(current.callback);
  }
  current.video.pause();
  current.video.srcObject = null;
  current.source?.getTracks().forEach(track => track.stop());
  current.output?.getTracks().forEach(track => track.stop());
  if (current.encoder && current.encoder.state !== 'closed') current.encoder.close();
}

function downloadMP4(blob) {
  if (objectURL) URL.revokeObjectURL(objectURL);
  objectURL = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  download.href = objectURL;
  download.download = `zelda-world-${stamp}.mp4`;
  download.textContent = `下载 MP4（${(blob.size / 1024 / 1024).toFixed(1)} MB）`;
  download.hidden = false;
  download.click();
}

async function stop(reason = '') {
  if (state !== 'recording') return;
  const current = session;
  setState('exporting');
  clearInterval(current.interval);
  clearTimeout(current.limit);
  status.textContent = '正在生成 MP4…';
  try {
    let blob;
    if (current.recorder) {
      const stopped = new Promise((resolve, reject) => {
        current.recorder.addEventListener('stop', resolve, { once: true });
        current.recorder.addEventListener('error', event => reject(event.error || new Error('录屏编码失败')), { once: true });
      });
      current.recorder.stop();
      await stopped;
      blob = new Blob(current.chunks, { type: 'video/mp4' });
    } else {
      await current.encoder.flush();
      current.muxer.finalize();
      blob = new Blob([current.target.buffer], { type: 'video/mp4' });
    }
    if (current.error) throw current.error;
    if (!blob.size || !current.frames) throw new Error('没有捕获到画面，请等待游戏加载后再录制');
    downloadMP4(blob);
    status.textContent = `${reason ? reason + '，' : ''}MP4 已生成，可再次下载。`;
  } catch (error) {
    status.textContent = `导出失败：${error.message || error}。请重试。`;
  } finally {
    cleanup(current);
    session = null;
    setState('idle');
  }
}

async function start() {
  if (state !== 'idle') return;
  if (document.getElementById('loading')) {
    status.textContent = '请等待游戏加载完成后录制。';
    return;
  }
  setState('starting');
  status.textContent = '正在准备录屏…';
  const current = { video: document.createElement('video'), frames: 0, bytes: 0, chunks: [], error: null };
  session = current;
  try {
    if (!canvas.captureStream) throw new Error('当前浏览器不支持画布录屏，请使用新版 Chrome 或 Edge');
    const size = dimensions();
    const config = await encodingConfig(size);
    const mime = nativeMime();
    if (!config && !mime) throw new Error('当前浏览器无法编码 MP4，请使用新版 Chrome 或 Edge，并通过 HTTPS 或 localhost 打开');
    current.surface = document.createElement('canvas');
    Object.assign(current.surface, size);
    current.context = current.surface.getContext('2d', { alpha: false });
    if (!current.context) throw new Error('无法创建录屏画布');
    if (mime) {
      current.output = current.surface.captureStream(FPS);
      current.recorder = new MediaRecorder(current.output, { mimeType: mime, videoBitsPerSecond: 4_000_000 });
      current.recorder.addEventListener('dataavailable', event => {
        if (!event.data.size) return;
        current.chunks.push(event.data);
        current.bytes += event.data.size;
        if (current.bytes >= MAX_BYTES) void stop('已达到录屏大小上限');
      });
      current.recorder.addEventListener('error', event => {
        current.error = event.error || new Error('录屏编码失败');
        void stop();
      });
    } else {
      current.target = new ArrayBufferTarget();
      current.muxer = new Muxer({ target: current.target, video: { codec: 'avc', ...size }, fastStart: 'in-memory', firstTimestampBehavior: 'offset' });
      current.encoder = new VideoEncoder({
        output: (chunk, metadata) => {
          try {
            current.muxer.addVideoChunk(chunk, metadata);
            current.bytes += chunk.byteLength;
            if (current.bytes >= MAX_BYTES) void stop('已达到录屏大小上限');
          } catch (error) { current.error = error; void stop(); }
        },
        error: error => { current.error = error; void stop(); }
      });
      current.encoder.configure(config);
    }
    current.source = canvas.captureStream(FPS);
    current.video.muted = true;
    current.video.playsInline = true;
    current.video.srcObject = current.source;
    // Bound startup so a stalled canvas stream cannot leave the controls disabled.
    let startupTimeout;
    try {
      await Promise.race([current.video.play(), new Promise((_, reject) => { startupTimeout = setTimeout(() => reject(new Error('画面捕获超时，请重试')), 10000); })]);
    } finally { clearTimeout(startupTimeout); }
    if (document.hidden) throw new Error('请保持游戏页面在前台录制');
    current.started = performance.now();
    current.lastFrame = -Infinity;
    current.lastKey = -Infinity;
    setState('recording');
    current.recorder?.start(1000);
    const draw = now => {
      if (state !== 'recording' || session !== current) return;
      try {
        if (now - current.lastFrame >= 1000 / FPS - 2 && current.video.readyState >= 2 && (!current.encoder || current.encoder.encodeQueueSize < 3)) {
          current.context.drawImage(current.video, 0, 0, size.width, size.height);
          if (current.encoder) {
            const timestamp = Math.max(0, Math.round((now - current.started) * 1000));
            const frame = new VideoFrame(current.surface, { timestamp, duration: Math.round(1_000_000 / FPS) });
            try {
              const keyFrame = now - current.lastKey >= 2000;
              current.encoder.encode(frame, { keyFrame });
              if (keyFrame) current.lastKey = now;
            } finally { frame.close(); }
          }
          current.lastFrame = now;
          current.frames++;
        }
      } catch (error) { current.error = error; void stop(); return; }
      current.callback = current.video.requestVideoFrameCallback ? current.video.requestVideoFrameCallback(draw) : requestAnimationFrame(draw);
    };
    draw(performance.now());
    current.interval = setInterval(() => {
      const elapsed = Math.floor((performance.now() - current.started) / 1000);
      timer.textContent = `● ${String(Math.floor(elapsed / 60)).padStart(2, '0')}:${String(elapsed % 60).padStart(2, '0')}`;
    }, 250);
    current.limit = setTimeout(() => void stop('已达到 5 分钟上限'), MAX_SECONDS * 1000);
    status.textContent = `录制中 · ${size.width} × ${size.height} · F8 停止`;
  } catch (error) {
    cleanup(current);
    session = null;
    setState('idle');
    status.textContent = error.message || String(error);
  }
}

function toggle() {
  if (state === 'idle') void start();
  else if (state === 'recording') void stop();
}
button.addEventListener('click', toggle);
// Prevent the game from seeing mouse/key input intended for the tool.
for (const type of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'click', 'wheel', 'keydown', 'keyup']) {
  panel.addEventListener(type, event => {
    if (event.code !== 'F8') event.stopPropagation();
  });
}
window.addEventListener('keydown', event => {
  if (event.code !== 'F8') return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (!event.repeat) toggle();
}, { capture: true });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) void stop('页面已切到后台，录屏自动结束');
});
window.addEventListener('beforeunload', event => {
  if (state !== 'idle') { event.preventDefault(); event.returnValue = ''; }
});
window.addEventListener('pagehide', () => {
  if (session) cleanup(session);
  if (objectURL) URL.revokeObjectURL(objectURL);
});
setState('idle');
