var $ = document.querySelector("img");
var a = new Audio("a/r.mp3");

function b() {
  var a = Math.ceil(6 * Math.random());
  $.className = "";
  $.src = "a/" + a + ".svg";
}

function c(e) {
  e.preventDefault();
  if ($.className) return;
  $.className = "a";
  a.play();
  setTimeout(b, 1000);
}

document.onkeydown = c;
if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) document.ontouchstart = c;
else document.onclick = c;

a.load();
b();
