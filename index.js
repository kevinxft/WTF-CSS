(function (window) {
  const allLinks = document.querySelectorAll(".main .link");
  const iframe = document.getElementById("iframe");

  function openInIframe(url) {
    if (iframe.src !== url) {
      iframe.src = url;
    }
  }

  allLinks.forEach((link, index) => {
    link.style.setProperty("--delay", `${index * 0.1}s`);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openInIframe(link.href);
    });
  });
})(window);
