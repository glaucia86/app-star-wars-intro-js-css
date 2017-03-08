var width   = window.innerWidth;
var height  = window.innerHeight;

var intro       = document.getElementByClassName("intro")[0];
var historia    = document.getElementByClassName("historia")[0];
var paragrafos  = document.getElementByClassName("paragrafos")[0];

intro.style.fontSize = width / 30 + "px";
paragrafos.style.height = height + "px";

window.addEventListener("resize", function() {
    width   = canvas.width  = window.innerWidth;
    height  = canvas.height = window.innerHeight;
    intro.style.fontSize = width / 30 + "px";
    historia.style.fontSize = width / 20 + "px";
    paragrafos.style.height = height + "px";
});