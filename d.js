var $ = document.querySelector('img'), a = new Audio('a/r.mp3');
a.load();
function b() {
    var d = Math.ceil(Math.random() * 6);
    $.setAttribute("class", "");
    $.src = 'a/' + d + '.svg';
}
function c() {
    if (!$.getAttribute('class').includes('a')) {
        $.setAttribute('class', 'a');
        a.play();
        setTimeout(b, 1000);
    }
}
if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iPhone|iPad|iPod/i)) document.onclick = c;
document.onkeydown = c;
document.ontouchmove = function(e){e.preventDefault()};
b();