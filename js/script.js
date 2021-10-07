document.addEventListener("DOMContentLoaded", function() {

  // initializations
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

  // role all dice
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
  
  
  // alter number of dice
  function numDice(n) {
    
    if (n > 9) n = 1;
    
    for (let i = 0; i < dice.length; i++)
      dice[i].remove();
    dice = [];
    
    for (let i = 0; i < n; i++) {
      
      let die = document.createElement("img");
      die.src = "a/2.svg";
      container.appendChild(die);
      dice.push(die);
      
      let two = n >= 2 && n <= 4;
      let three = n == 5 || n == 6 || n == 9;
      let four = n == 7 || n == 8;
      let six = n == 9;
      let breaks = [false, false, two, three, four, false, six];
      if (breaks[i + 1])
        container.appendChild(document.createElement("br"));
        
      let size = 80 / breaks.indexOf(true);
      die.style.width = size + "vmin";
      die.style.height = size + "vmin";
        
    }
    
  }
  
  numDice(5);

});
