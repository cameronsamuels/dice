function id(id) { return document.getElementById(id); }
var snd = new Audio('roll.mp3'), colors = ['blue', 'yellow', 'green', 'red', 'purple', 'orange'];
function update() {
    var num = Math.ceil(Math.random() * 6);
    id("dice").setAttribute("class", "");
    id('dice').src = 'img/' + num + 't.png';
    document.body.style.backgroundColor = colors[num - 1];
}
function roll() {
    if (!id('dice').getAttribute('class').includes('anim')) {
        id('dice').setAttribute('class', 'anim');
        snd.play();
        setTimeout('update()', 1000);
    }
}
if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iPhone|iPad|iPod/i)) document.body.onclick = roll;
document.body.onkeydown = roll;
document.body.ontouchmove = function(e){e.preventDefault()};
update();