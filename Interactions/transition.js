const transitionBlock = document.getElementById("transition-cover");
const clickEvent = document.getElementsByTagName('a');

function pageTransition(){
    transitionBlock.style.transform = "translate(0%, 0%)";
    setTimeout(function(){
        transitionBlock.style.transform = "translate(0%, -100%)";
    }, 1000);
}

window.addEventListener("load", pageTransition());