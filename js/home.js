var background = document.getElementById('fondo')
var total_seg;
var total_min;
var cronometro;
window.onload = function() {
    document.onmousemove = function(e) {
        var x = -(e.clientX/80);
        var y = -(e.clientY/80);
        background.style.translate = x + 'px ' + y + 'px';
    };
};

function autoplay(){
    iniciartiempo();
}
autoplay();