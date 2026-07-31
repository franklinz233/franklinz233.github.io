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

  const playPromise = video.play();
  if (playPromise) playPromise.catch(() => {});
};

const visibleLazyVideos = () => document.querySelectorAll("video.lazy-video[data-src]");
const standaloneLazyVideos = () => document.querySelectorAll("video.lazy-video[data-src]:not(.synced-video)");
const syncGroups = [...document.querySelectorAll("[data-sync-group]")];

const waitUntilReady = (video) => {
  loadVideo(video);
  if (video.readyState >= 3) return Promise.resolve();

  return new Promise((resolve) => {
    video.addEventListener("canplay", resolve, { once: true });
  });
};

const playGroup = async (group, force = false) => {
  if (prefersReducedMotion && !force) return;

  const videos = [...group.querySelectorAll("video")];
  await Promise.all(videos.map(waitUntilReady));
  group.dataset.syncPlaying = "true";
  videos.forEach((video) => {
    video.loop = false;
    video.currentTime = 0;
  });
  videos.forEach((video) => {
    const playPromise = video.play();
    if (playPromise) playPromise.catch(() => {});
  });
};

const pauseGroup = (group) => {
  group.dataset.syncPlaying = "false";
  group.querySelectorAll("video").forEach((video) => video.pause());
};

syncGroups.forEach((group) => {
  let restartPending = false;
  group.querySelectorAll("video").forEach((video) => {
    video.addEventListener("ended", () => {
      if (restartPending || group.dataset.syncPlaying !== "true") return;
      restartPending = true;

      window.requestAnimationFrame(() => {
        const groupVideos = [...group.querySelectorAll("video")];
        groupVideos.forEach((item) => {
          item.currentTime = 0;
        });
        groupVideos.forEach((item) => {
          const playPromise = item.play();
          if (playPromise) playPromise.catch(() => {});
        });
        restartPending = false;
      });
    });
  });
});

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
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
    { rootMargin: "180px 0px", threshold: 0.08 },
  );

  standaloneLazyVideos().forEach((video) => videoObserver.observe(video));

  const groupObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.closest("[hidden]")) {
          playGroup(entry.target);
        } else {
          pauseGroup(entry.target);
        }
      });
    },
    { rootMargin: "180px 0px", threshold: 0.08 },
  );

  syncGroups.forEach((group) => groupObserver.observe(group));
} else {
  visibleLazyVideos().forEach(loadVideo);
}

document.querySelectorAll(".demo-item video, .overview-video video, .result-video-wall video, .ablation-video video").forEach((video) => {
  video.addEventListener("click", () => {
    if (video.paused) {
      playVideo(video, true);
    } else {
      video.pause();
    }
  });
});

syncGroups.forEach((group) => {
  group.addEventListener("click", (event) => {
    if (!event.target.closest("video")) return;

    const videos = [...group.querySelectorAll("video")];
    if (videos.every((video) => video.paused)) playGroup(group, true);
    else pauseGroup(group);
  });
});

const tabs = [...document.querySelectorAll(".demo-tab")];
const panels = [...document.querySelectorAll("[data-demo-panel]")];

const selectTab = (tab) => {
  const panelName = tab.dataset.panel;

  tabs.forEach((item) => {
    const isSelected = item === tab;
    item.classList.toggle("is-active", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
    item.tabIndex = isSelected ? 0 : -1;
  });

  panels.forEach((panel) => {
    const isSelected = panel.dataset.demoPanel === panelName;
    panel.hidden = !isSelected;
    panel.classList.toggle("is-active", isSelected);

    panel.querySelectorAll("video:not(.synced-video)").forEach((video) => {
      if (isSelected) playVideo(video);
      else video.pause();
    });

    panel.querySelectorAll("[data-sync-group]").forEach((group) => {
      if (isSelected) playGroup(group);
      else pauseGroup(group);
    });
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    selectTab(tabs[nextIndex]);
  });
});

document.addEventListener("visibilitychange", () => {
  visibleLazyVideos().forEach((video) => {
    if (document.hidden && !video.paused) video.pause();
  });
});

window.setInterval(() => {
  syncGroups.forEach((group) => {
    const videos = [...group.querySelectorAll("video")].filter((video) => !video.paused && video.readyState >= 1);
    if (videos.length < 2) return;

    const shortestDuration = Math.min(...videos.map((video) => video.duration));
    if (videos.some((video) => video.currentTime >= shortestDuration - 0.12)) {
      videos.forEach((video) => {
        video.currentTime = 0;
      });
      return;
    }

    const leaderTime = videos[0].currentTime;
    videos.slice(1).forEach((video) => {
      if (Math.abs(video.currentTime - leaderTime) > 0.14) video.currentTime = leaderTime;
    });
  });
}, 250);

if (prefersReducedMotion) {
  document.querySelectorAll(".workflow-svg").forEach((svg) => svg.pauseAnimations?.());
}

const copyButton = document.querySelector("#copy-bibtex");
const bibtexCode = document.querySelector("#bibtex-code");

copyButton.addEventListener("click", async () => {
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
