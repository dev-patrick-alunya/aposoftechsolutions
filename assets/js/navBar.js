document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.services-dropdown');
    const dropdownMenu = document.querySelector('.services-dropdown-menu');

    dropdown.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });
});