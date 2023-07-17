const main = document.querySelector(".main");
const cards = document.querySelectorAll(".card");

main.onmousemove = function (e) {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  }
};
