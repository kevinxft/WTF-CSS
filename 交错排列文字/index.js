const overlaps = document.querySelectorAll(".overlap");

overlaps.forEach((overlap) => {
  overlap.innerHTML = overlap.textContent
    .split("")
    .map((l, i, arr) => `<span style="--i: ${arr.length - i}">${l}</span>`)
    .join("");
});
