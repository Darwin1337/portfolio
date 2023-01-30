const menu = document.querySelector(".nav__menu");
const darkOverlay = document.querySelector(".nav__dark__overlay");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  darkOverlay.classList.toggle("active");
});