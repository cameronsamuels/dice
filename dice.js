var $ = function(e) { return document.getElementById(e) }, a = new Audio('roll.mp3');
a.load();
function b() {
    var d = Math.ceil(Math.random() * 6);
    $("dice").setAttribute("class", "");
    $('dice').src = 'img/' + d + 't.png';
}
function c() {
    if (!$('dice').getAttribute('class').includes('anim')) {
        $('dice').setAttribute('class', 'anim');
        a.play();
        setTimeout('update()', 1000);
    }
}
if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iPhone|iPad|iPod/i)) document.body.onclick = c;
document.body.onkeydown = c;
document.body.ontouchmove = function(e){e.preventDefault()};
b();
