document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.chaintech__navbar-menu');
    var menu = document.querySelector('.chaintech__navbar-menu_container');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
