var background = document.getElementById('fondo')

window.onload = function() {
    document.onmousemove = function(e) {
        var x = -(e.clientX/80);
        var y = -(e.clientY/80);
        background.style.translate = x + 'px ' + y + 'px';
    };
};