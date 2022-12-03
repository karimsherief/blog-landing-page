const menu = document.querySelector(".menu");
const arrow = document.querySelector(".menu a i");
const list = document.querySelector(".menu ul");
const burgerIcon = document.querySelector(".burger-icon");
const navBar = document.querySelector("nav");

menu.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrow.classList.toggle("up");
});

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("toggle");
  navBar.classList.toggle("show");
});
