const cursor = document.getElementById("cursor");
const gradient = document.getElementById("gradient");
const allButton = document.getElementsByTagName("button");
const allHyperlink = document.getElementsByTagName("a");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  
  if(cursor){
    cursor.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 500, fill: "forwards"
    });
  };

  if(gradient){
    gradient.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
      }, {duration: 10000, fill: "forwards"
      });
  };
};

for (var i = 0 ; i < allButton.length ; i++){
  allButton[i].addEventListener("mouseover", function(){
    cursor.style.transform = "scale(1.5)";
  });
}

for (var i = 0 ; i < allButton.length ; i++){
  allButton[i].addEventListener("mouseout", function(){
    cursor.style.transform = "scale(1)";
  });
}

for (var i = 0 ; i < allHyperlink.length ; i++){
  allHyperlink[i].addEventListener("mouseover", function(){
    cursor.style.transform = "scale(1.5)";
  })
}

for (var i = 1 ; i < allHyperlink.length ; i++){
  allHyperlink[i].addEventListener("mouseout", function(){
    cursor.style.transform = "scale(1)";
  })
}