(function () {
  const view = document.querySelector(".view");
  const list = document.querySelector(".list");

  let isFocus = true;
  let speed = 0.5;
  let x = 0;
  let len = list.offsetWidth;
  let originTitle = document.title;

  view.onmouseenter = function (e) {
    speed = 0.2;
  };

  view.onmouseleave = function (e) {
    speed = 0.5;
  };

  function flashView() {
    x += speed;
    if (x > len) {
      x = 0;
    }
    view.style = `transform: translateX(${-x}px`;
    isFocus && requestAnimationFrame(flashView);
  }
  requestAnimationFrame(flashView);

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      isFocus = false;
      document.title = "停止动画";
    } else {
      isFocus = true;
      document.title = originTitle;
      flashView();
    }
  });
})();
