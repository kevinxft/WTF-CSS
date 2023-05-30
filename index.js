(function (window) {
  const isGithubEnv = window.origin.indexOf("github") > 0;
  const allLinks = document.querySelectorAll(".main .link");
  const iframe = document.getElementById("iframe");

  function openInIframe(url) {
    console.log(iframe);
    iframe.src = url;
    console.log(url);
  }

  allLinks.forEach((link) => {
    if (isGithubEnv) {
      const href = link.href.replace(`${window.origin}/`, window.location.href);
    }
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openInIframe(link.href);
    });
  });
})(window);
