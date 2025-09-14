/*========================= SIDEBAR =========================*/
/* 
  Hamburger veya navClose butonuna tıklandığında navMenu'ye
  'show-menu' class'ı eklensin.
*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});