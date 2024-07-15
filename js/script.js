// Toggle Hamburger Menu & Start Transform
document.querySelector(".hamburger_menu").addEventListener("click", open);
function open() {
  document.querySelector(".nav_menu").classList.toggle("show");
  document.querySelector(".hamburger_menu").classList.toggle("move");
}

// Toogle Search Menu 
document.querySelector(".search_icon").addEventListener("click", search);
function search() {
  document.querySelector(".nav_search").classList.toggle("show");
}

// Scroll to Top Button 

document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backtop_button');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('block');
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
            backToTopButton.classList.remove('block');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



