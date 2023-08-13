const landingPage = document.getElementById("top-page");

function landingAnimation(){
    setTimeout(function(){
        landingPage.style.transform = "scale(1)";
    }, 1200);
}

window.addEventListener("load", landingAnimation);