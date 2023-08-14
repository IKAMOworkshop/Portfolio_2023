const landingPage = document.getElementById("top-page");

function landingAnimation(){
    setTimeout(function(){
        landingPage.style.transform = "scale(1)";
    }, 1200);
}

if(landingPage){
    window.addEventListener("load", landingAnimation);
};

const moveToProject = document.getElementById("navigate-button");
const moveToTop = document.getElementById("return-button");
const projectOne = document.getElementById("project-one");

if(projectOne){
    moveToProject.addEventListener("click", function(){
        projectOne.scrollIntoView({
            behavior: "smooth",
        });
    });
};

if (landingPage){
    moveToTop.addEventListener("click", function(){
        landingPage.scrollIntoView({
            behavior: "smooth",
        });
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('content-show');
        }
    })
},
{
    threshold: .1,
});

const hiddenElements = document.querySelectorAll(".content-hidden");
hiddenElements.forEach((el) => observer.observe(el));