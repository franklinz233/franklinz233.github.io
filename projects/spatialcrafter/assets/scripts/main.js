//* ======================== Slide Control ===================== */
// var contents = document.getElementsByClassName("slide-content");

// document.getElementById("slide-menu").addEventListener("click", function(e) {
//   const idx = [...this.children]
//     .filter(el => el.className.indexOf('dot') > -1)
//     .indexOf(e.target);
    
//   if (idx >= 0) {
//     var prev = document.querySelector(".dot.active");
//     if (prev) prev.classList.remove("active");
//     e.target.classList.add("active");
    
//     for (var i = 0; i < contents.length; i++) {
//       if (i == idx) {
//         contents[i].style.display = "block";
//       } else {
//         contents[i].style.display = "none";
//       }
//     }  
//   }
// });


// function setupSlideMenu(menuId) {
//   var menu = document.getElementById(menuId);
//   if (!menu) return;
  
//   // 找到包含此menu的container
//   var container = menu.closest('.container');
//   // 只获取当前container内的slide-content元素
//   var contents = container.getElementsByClassName("slide-content");
  
//   menu.addEventListener("click", function(e) {
//     // 检查点击的是否为dot元素或其子元素
//     var target = e.target;
//     while (target !== this && !target.classList.contains('dot')) {
//       target = target.parentElement;
//     }
    
//     // 如果找到了dot元素
//     if (target.classList.contains('dot')) {
//       // 获取data-slide属性值
//       var slideIndex = target.getAttribute('data-slide');
      
//       // 移除当前menu中的active类
//       var prev = this.querySelector(".dot.active");
//       if (prev) prev.classList.remove("active");
//       target.classList.add("active");
      
//       // 显示对应的slide内容
//       for (var i = 0; i < contents.length; i++) {
//         if (contents[i].getAttribute('data-slide') === slideIndex) {
//           contents[i].style.display = "block";
//         } else {
//           contents[i].style.display = "none";
//         }
//       }
//     }
//   });
// }

// // 为每个slide menu设置事件处理
// setupSlideMenu('slide-menu-1');
// setupSlideMenu('slide-menu-2');
// setupSlideMenu('slide-menu-3');

function setupSlideMenu(menuId) {
  var menu = document.getElementById(menuId);
  if (!menu) return;
  
  // 找到包含此menu的container
  var container = menu.closest('.container');
  // 只获取当前container内的slide-content元素
  var contents = container.getElementsByClassName("slide-content");
  
  menu.addEventListener("click", function(e) {
    // 检查点击的是否为dot元素或其子元素
    var target = e.target;
    while (target !== this && !target.classList.contains('dot')) {
      target = target.parentElement;
    }
    
    // 如果找到了dot元素
    if (target.classList.contains('dot')) {
      // 获取data-slide属性值
      var slideIndex = target.getAttribute('data-slide');
      
      // 移除当前menu中的active类
      var prev = this.querySelector(".dot.active");
      if (prev) prev.classList.remove("active");
      target.classList.add("active");
      
      // 显示对应的slide内容
      for (var i = 0; i < contents.length; i++) {
        if (contents[i].getAttribute('data-slide') === slideIndex) {
          contents[i].style.display = "block";
        } else {
          contents[i].style.display = "none";
        }
      }
    }
  });
}

// 自动查找并设置所有slide-menu
document.addEventListener("DOMContentLoaded", function() {
  // 方法1：通过class查找所有slide-menu
  var slideMenus = document.querySelectorAll('.slide-menu ul');
  slideMenus.forEach(function(menu) {
    if (menu.id) {
      setupSlideMenu(menu.id);
    }
  });
  
  // 方法2：查找id以'slide-menu'开头的所有元素
  var idPattern = /^slide-menu/;
  var allElements = document.getElementsByTagName('*');
  for (var i = 0; i < allElements.length; i++) {
    if (allElements[i].id && idPattern.test(allElements[i].id)) {
      setupSlideMenu(allElements[i].id);
    }
  }
});

//* ======================== Video Control ===================== */
function ToggleVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
      if (videos[i].paused) {
          videos[i].play();
      } else {
          videos[i].pause();
      }
  }
};


function SlowVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = videos[i].playbackRate * 0.9;
    videos[i].play();
  }
  
  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; };


function FastVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = videos[i].playbackRate / 0.9;
    videos[i].play();
  }

  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; 
};

function RestartVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].playbackRate = 1.0;
    videos[i].currentTime = 0;
    videos[i].play();
  }
  
  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; 
};

//* ======================== Slide Show Control ===================== */
const slider = document.querySelector('.container .slider');
const [btnLeft, btnRight] = ['prev_btn', 'next_btn'].map(id => document.getElementById(id));
let interval;

// Set positions
const setPositions = () => 
    [...slider.children].forEach((item, i) => 
        item.style.left = `${(i-1) * 440}px`);

// Initial setup
setPositions();

// Set transition speed
const setTransitionSpeed = (speed) => {
    [...slider.children].forEach(item => 
        item.style.transitionDuration = speed);
};

// Slide functions
const next = (isAuto = false) => { 
    setTransitionSpeed(isAuto ? '1.5s' : '0.2s');
    slider.appendChild(slider.firstElementChild); 
    setPositions(); 
};

const prev = () => { 
    setTransitionSpeed('0.2s');
    slider.prepend(slider.lastElementChild); 
    setPositions(); 
};

// Auto slide
const startAuto = () => interval = interval || setInterval(() => next(true), 2000);
const stopAuto = () => { clearInterval(interval); interval = null; };

// Event listeners
btnRight.addEventListener('click', () => next(false));
btnLeft.addEventListener('click', prev);

// Mouse hover controls
[slider, btnLeft, btnRight].forEach(el => {
    el.addEventListener('mouseover', stopAuto);
    el.addEventListener('mouseout', startAuto);
});

// Start auto slide
startAuto();