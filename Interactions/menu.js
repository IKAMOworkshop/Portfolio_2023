const navMenu = document.getElementById('nav-menu');
const navButton = document.getElementById('menu-button');

function toggleMenu() {
    const opacityCheck = navMenu.style.opacity;
    if (opacityCheck == '1') {
        return closeMenu();
    }
    return openMenu();
};

function openMenu() {
    navMenu.style.opacity = "1";
};

function closeMenu() {
    navMenu.style.opacity = "0";
};

navButton.addEventListener('click', toggleMenu);