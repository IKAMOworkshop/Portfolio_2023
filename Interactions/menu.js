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
    navMenu.style.display = "flex";
    setTimeout(function(){
        navMenu.style.opacity = "1";
    }, 1)
}

function closeMenu() {
    navMenu.style.opacity = "0";
    setTimeout(function(){
        navMenu.style.display = "none";
    }, 1000)
};

navButton.addEventListener('click', toggleMenu);

const scrollProgressBar = document.querySelector("#progress-bar");

function scrollProgress() {
    const totalHeight = document.body.scrollHeight;
    const currentDistance = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage = (currentDistance / (totalHeight - windowHeight)) * 100;

    scrollProgressBar.style.height = Math.round(scrolledPercentage) + "%";
}

document.addEventListener('scroll', scrollProgress);

const emailButton = document.getElementsByClassName('email-link');

function copyEmail() {
    navigator.clipboard.writeText("changjeremy0226@gmail.com").then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
      },() => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
      });
}

emailButton.addEventListener('click', copyEmail);