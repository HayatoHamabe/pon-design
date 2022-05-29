//toggle menu
toggle = () => {
  const line = document.getElementById("hamburger-line");
  const nav = document.getElementById("global-nav");
  line.classList.toggle("is-active");
  nav.classList.toggle("is-show");
};

// with window scroll
window.onscroll = () => {
  //header background
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }

  //page top link
  const pageTopLink = document.getElementsByClassName("c-page-top-link");
  if (window.scrollY >= 300) {
    pageTopLink[0].classList.add("is-show");
  } else {
    pageTopLink[0].classList.remove("is-show");
  }
};

// smooth scroll
window.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
});
