const cursor = document.getElementById("cursor");
const gradient = document.getElementById("gradient");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  
  cursor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 800, fill: "forwards"
  });
  
  gradient.animate({
  left: `${clientX}px`,
  top: `${clientY}px`
  }, {duration: 10000, fill: "forwards"
  });
};