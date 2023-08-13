const transitionBlock = document.getElementById("transition-cover");

function pageIn(){
    transitionBlock.style.transform = "translate(0%, 0%)";
    setTimeout(function(){
        transitionBlock.style.transform = "translate(0%, -100%)";
    }, 1200);
};

function pageOut(p1, p2){
    const selectedPage = document.getElementById(p1);

    selectedPage.addEventListener('click', function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = p2;
        }, 800);
    });
};

window.addEventListener('load', pageIn);

pageOut.call(this,"home-link", "/Pages/Landing/index.html");
pageOut.call(this,"logo-home", "/Pages/Landing/index.html");
pageOut.call(this,"lab-link", "/Pages/Lab/lab.html");
pageOut.call(this,"code-link", "/Pages/Code/code.html");
pageOut.call(this,"about-link", "/Pages/About/about.html");
pageOut.call(this,"p1-link", "/Pages/Nebula/nebula.html");
pageOut.call(this,"p1-section", "/Pages/Nebula/nebula.html");
pageOut.call(this,"p2-link", "/Pages/Angine/aingine.html");
pageOut.call(this,"p2-section", "/Pages/Angine/aingine.html");
pageOut.call(this,"p3-link", "/Pages/Immersion_Lab/immersion.html");
pageOut.call(this,"p3-section", "/Pages/Immersion_Lab/immersion.html");
pageOut.call(this,"p4-link", "/Pages/Neuron/neuron.html");
pageOut.call(this,"p4-section", "/Pages/Neuron/neuron.html");
pageOut.call(this,"p5-link", "/Pages/Airbnb/airbnb.html");
pageOut.call(this,"p5-section", "/Pages/Airbnb/airbnb.html");
pageOut.call(this,"p6-link", "/Pages/Fracture/frature.html");
pageOut.call(this,"p6-section", "/Pages/Fracture/frature.html");