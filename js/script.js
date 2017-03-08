var width = window.innerWidth;
var height = window.innerHeight;

var intro = document.getElementByClassName("intro")[0];

intro.style.fontSize = width / 30 + "px";

window.addEventListener("resize", function() {
    width   = canvas.width  = window.innerWidth;
    height  = canvas.height = window.innerHeight;
    intro.style.fontSize = width / 30 + "px";
});