document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.services-dropdown');
    const dropdownMenu = document.querySelector('.services-dropdown-menu');
    const navbar = document.querySelector('nav.navbar');

    dropdown.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Formatted Date
const currentDate = new Date();
const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
const date = document.getElementById('date');
date.innerHTML = formattedDate;
date.style.color = 'white';
