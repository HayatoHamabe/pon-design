console.log("import");

//toggle menu
toggle = () => {
  // const target = document.getElementById("js-header-toggle");
  const line = document.getElementById("hamburger-line");
  const nav = document.getElementById("global-nav");
  line.classList.toggle("is-active");
  nav.classList.toggle("is-show");
};
