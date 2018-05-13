document.addEventListener("DOMContentLoaded", function() {

  var dice = document.querySelector("img");
  var sound = new Audio("a/roll.mp3");

  function roll() {
    if (dice.style.animation) return;
    dice.style.animation = "roll 1s";
    sound.play();
    setTimeout(function() {
      var number = Math.ceil(6 * Math.random());
      dice.style.animation = "";
      dice.src = "a/" + number + ".svg";
    }, 1000);
  }

  document.addEventListener("keydown", roll);
  document.addEventListener(navigator.userAgent.match(/iPhone|iPad/i) ? "touchstart" : "click", roll);

  sound.load();

  var number = Math.ceil(6 * Math.random());
  dice.src = "a/" + number + ".svg";

});
