(function (window) {
  const isGithubEnv = window.origin.indexOf("github") > 0;
  const allLinks = document.querySelectorAll(".main .link");
  const iframe = document.getElementById("iframe");

  function openInIframe(url) {
    if (iframe.src !== url) {
      iframe.src = url;
    }
  }

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = isGithubEnv
        ? link.href.replace(`${window.origin}/`, window.location.href)
        : link.href;
      openInIframe(url);
    });
  });
})(window);
