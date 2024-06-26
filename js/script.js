document.querySelector(".hamburger_menu").addEventListener("click", open);
function open() {
  document.querySelector(".nav_menu").classList.toggle("show");
  document.querySelector(".hamburger_menu").classList.toggle("move");
}
