document.addEventListener("DOMContentLoaded", function() {

  var dice = document.querySelector("img");
  var sound = new Audio("a/roll.mp3");

  function roll() {
    if (dice.style.animation) return;

    var colors = [
  		"196, 143, 101",
  		"220, 76, 70",
  		"146, 181, 88",
  		"79, 132, 196",
  		"210, 105, 30",
  		"34, 58, 94",
  		"250, 179, 1",
  		"0, 89, 96",
  		"137, 142, 140",
  		"103, 46, 59"
  	];
  	do {
  		var chosenColor = "rgb(" + colors[Math.floor(Math.random() * colors.length)] + ")";
  	} while (chosenColor == document.body.style.background);
  	document.body.style.background = chosenColor;

    dice.style.animation = "roll 1s";
    sound.play();

    setTimeout(function() {
      var number = Math.ceil(6 * Math.random());
      dice.style.animation = "";
      dice.src = "a/" + number + ".svg";
    }, 1000);
  }

  document.addEventListener("keydown", roll);
  document.addEventListener("click", roll);

  sound.load();

  document.body.click();

});
