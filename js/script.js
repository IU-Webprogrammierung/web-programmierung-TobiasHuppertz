document.querySelector(".hamburger_menu").addEventListener("click", open);
function open() {
  document.querySelector(".nav_menu").classList.toggle("show");
  document.querySelector(".hamburger_menu").classList.toggle("move");
}

document.querySelector(".search_icon").addEventListener("click", search);
function search() {
  document.querySelector(".nav_search").classList.toggle("show");
}