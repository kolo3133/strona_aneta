const toggleNav = () => {
  let scroll_top = window.scrollY;
  const nav = document.getElementById("nav");
  if (scroll_top === 0) {
    nav.classList.add("navbar-scroll-active");
  } else {
    nav.classList.remove("navbar-scroll-active");
  }
};

document.addEventListener("DOMContentLoaded", toggleNav);
