let count = 0;
document.querySelectorAll(".title").forEach((title) => {
  title.innerHTML = title.innerHTML
    .split("")
    .map((letter) => {
      return `<span style="--delay: ${count++ * 0.1}s" class="letter">${
        letter.trim() ? letter : "&nbsp;"
      }</span>`;
    })
    .join("");
});
