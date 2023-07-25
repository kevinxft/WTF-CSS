const list = document.querySelectorAll(".nav li");
list.forEach((li) =>
  li.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  })
);
