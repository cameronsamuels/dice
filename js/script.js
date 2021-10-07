document.addEventListener("DOMContentLoaded", function() {

  var container = document.querySelector("div");
  var dice = [document.querySelector("img")];
  var nums = [2];
  var sound = new Audio("a/roll.mp3");
  var colors = [
    "255, 87, 34",
    "76, 175, 80",
    "33, 150, 243",
    "63, 81, 181",
    "244, 143, 177",
    "121, 85, 72"
  ];

  function roll() {
    for (let i = 0; i < dice.length; i++) {
      let die = dice[i];
      
      if (die.style.animation) return;
      die.style.animation = "roll 1s";
      sound.play();
  
      nums[i] = Math.ceil(6 * Math.random());
      setTimeout(function() {
        die.style.animation = "";
        die.src = "a/" + nums[i] + ".svg";
        die.alt = nums[i];
      }, 1000);
    }
    let color = colors[Math.ceil(6 * Math.random()) - 1];
    document.body.style.background = "rgb(" + color + ")";
  }

  document.addEventListener("keydown", roll);
  document.addEventListener("click", roll);

  sound.load();

});
