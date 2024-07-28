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

// Dropdown-Menu
const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownSelectedOption = document.getElementById("dropdown-selected-option");
const caret = document.getElementById("caret");

function toggleCaret(){
  caret.style.transform =='rotate(0deg)'? caret.style.transform ='rotate(180deg)':caret.style.transform ='rotate(0deg)';
}

dropdownButton.addEventListener("click", function (event) {
  event.stopPropagation();

  toggleCaret();
  dropdownMenu.classList.toggle("hidden");
  dropdownButton.setAttribute("aria-expanded", dropdownMenu.classList.contains("hidden") ? "false" : "true");
});

// Add placeholder text to list items
const dropdownItems = dropdownMenu.querySelectorAll("[role='menuitem']");
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownSelectedOption.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownButton.setAttribute("aria-expanded", "false");
      toggleCaret();

  });
});

// Dismiss dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  if (!dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add("hidden");
    dropdownButton.setAttribute("aria-expanded", "false");
    caret.style.transform = 'rotate(0deg)';
  }
});


// Sortierfunktion Artikel

function sortByRelevanz() {
    sortContainers('relevanz');
}

function sortByNewest() {
    sortContainers('neuste');
}

function sortByOldest() {
    sortContainers('älteste');
}

function sortContainers(selectedSort) {
    const containerParent = document.getElementById('containerParent');
    const containers = Array.from(containerParent.getElementsByClassName('sort-container'));

    containers.sort((a, b) => {
        if (selectedSort === 'relevanz') {
            return b.getAttribute('data-clickcount') - a.getAttribute('data-clickcount');
        } else if (selectedSort === 'neuste') {
            return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
        } else if (selectedSort === 'älteste') {
            return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
        }
    });

    containers.forEach(container => {
        containerParent.appendChild(container.parentNode);
    });
}
