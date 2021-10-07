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
  function roll(e) {
    
    let id = e.target.getAttribute("id");
    if (id === "js-increase" || id === "js-decrease")
      return;
    
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
    
    container.innerHTML = "";
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
  
  document.querySelector("#js-increase").addEventListener("click", function() {
    if (dice.length < 9)
      numDice(dice.length + 1);
  });

  document.querySelector("#js-decrease").addEventListener("click", function() {
    if (dice.length > 1)
      numDice(dice.length - 1);
  });
  
});
