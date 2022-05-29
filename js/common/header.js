//toggle menu
toggle = () => {
  const line = document.getElementById("hamburger-line");
  const nav = document.getElementById("global-nav");
  line.classList.toggle("is-active");
  nav.classList.toggle("is-show");
};

//header background
window.onscroll = () => {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }
};
