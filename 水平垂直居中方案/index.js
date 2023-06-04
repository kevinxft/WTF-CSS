(function () {
  const defaultClassList = ["grid", "flex", "absolute"];
  const allLi = document.querySelectorAll(".panne li");
  const parent = document.querySelector(".plan");
  const panne = document.querySelector(".panne");
  panne.addEventListener("click", function (evt) {
    const plan = evt.target.dataset.plan;
    if (plan) {
      allLi.forEach((item) => item.classList.remove("active"));
      evt.target.classList.add("active");
      parent.classList.remove(...defaultClassList);
      parent.classList.add(plan);
    }
  });
})();
