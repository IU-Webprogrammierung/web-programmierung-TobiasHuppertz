document.querySelector(".hamburger_menu").addEventListener("click", abc);
function abc() {
  document.querySelector(".nav_menu").classList.toggle("show");
  document.querySelector(".hamburger_menu").classList.toggle("move");
}
