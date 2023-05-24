const input = document.querySelector("input");
const card = document.querySelector(".card");

input.oninput = () => {
  card.style.setProperty("--delay", `-${input.value}s`);
};
