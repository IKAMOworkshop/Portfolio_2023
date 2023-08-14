const landingPage = document.getElementById("top-page");

function landingAnimation(){
    setTimeout(function(){
        landingPage.style.transform = "scale(1)";
    }, 300);
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

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('title-show');
        }
    })
},
{
    threshold: .1,
});

const hiddenTitle = document.querySelectorAll(".title-hidden");
setTimeout(() => {
    hiddenTitle.forEach((el) => titleObserver.observe(el));
}, 500);

const detailObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('detail-show');
        }
    })
},
{
    threshold: .1,
});

const hiddenDetail = document.querySelectorAll(".detail-hidden");
setTimeout(() => {
    hiddenDetail.forEach((el) => detailObserver.observe(el));
}, 1000);

const buttonObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('button-show');
        }
    })
},
{
    threshold: .5,
});

const hiddenButton = document.querySelectorAll(".button-hidden");
setTimeout(() => {
    hiddenButton.forEach((el) => buttonObserver.observe(el));
}, 1500);