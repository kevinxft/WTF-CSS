const button = document.querySelector("button");

button.addEventListener("click", function (evt) {
  let boudingBox = this.getBoundingClientRect();
  let x = evt.clientX - boudingBox.left;
  let y = evt.clientY - boudingBox.top;

  let ripple = document.createElement("span");
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  this.appendChild(ripple);

  ripple.addEventListener("animationend", () => ripple.remove());
});
