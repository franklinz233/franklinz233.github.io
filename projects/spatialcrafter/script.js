const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const loadVideo = (video) => {
  if (!video.src && video.dataset.src) {
    video.src = video.dataset.src;
    video.load();
  }
};

const playVideo = (video, force = false) => {
  loadVideo(video);
  if (prefersReducedMotion && !force) return;
  const promise = video.play();
  if (promise) promise.catch(() => {});
};

const allLazyVideos = () => [...document.querySelectorAll("video.lazy-video[data-src]")];

const visibleVideos = (root = document) => [...root.querySelectorAll("video.lazy-video[data-src]")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && !video.closest("[hidden]")) {
          playVideo(video);
        } else if (!video.paused) {
          video.pause();
        }
      });
    },
    { rootMargin: "220px 0px", threshold: 0.08 },
  );

  allLazyVideos().forEach((video) => observer.observe(video));
} else {
  allLazyVideos().forEach((video) => loadVideo(video));
}

document.querySelectorAll("video.lazy-video").forEach((video) => {
  video.addEventListener("click", () => {
    if (video.paused) playVideo(video, true);
    else video.pause();
  });
});

const tabs = [...document.querySelectorAll(".demo-tab")];
const panels = [...document.querySelectorAll("[data-demo-panel]")];

const selectTab = (tab) => {
  const panelName = tab.dataset.panel;
  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    const selected = panel.dataset.demoPanel === panelName;
    panel.hidden = !selected;
    panel.classList.toggle("is-active", selected);
    visibleVideos(panel).forEach((video) => {
      if (selected) playVideo(video);
      else video.pause();
    });
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + direction + tabs.length) % tabs.length;
    tabs[next].focus();
    selectTab(tabs[next]);
  });
});

document.addEventListener("visibilitychange", () => {
  allLazyVideos().forEach((video) => {
    if (document.hidden && !video.paused) video.pause();
  });
});

const copyButton = document.querySelector("#copy-bibtex");
const bibtexCode = document.querySelector("#bibtex-code");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(bibtexCode.textContent.trim());
    copyButton.textContent = "Copied";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtexCode);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Selected";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1800);
});
