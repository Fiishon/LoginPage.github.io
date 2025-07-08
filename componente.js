function enviar() {
    const numero = "5219512241269";
    const mensaje = encodeURIComponent("Hola, esta es una prueba");
    const url = "https://wa.me/" + numero + "?text=" + mensaje;
    window.open(url, "_blank");
}

const btn = document.getElementById("btnws");
let X, Y;
let arrastrar = false;
let mover = false;

btn.addEventListener("mousedown", function(eve) {
    arrastrar = true;
    mover = false;
    X = eve.clientX - btn.getBoundingClientRect().left;
    Y = eve.clientY - btn.getBoundingClientRect().top;
    btn.style.transition = "none";
    eve.preventDefault();
});

document.addEventListener("mousemove", function(eve) {
    if (arrastrar) {
        btn.style.left = (eve.clientX - X) + "px";
        btn.style.top = (eve.clientY - Y) + "px";
        mover = true;
    }
});

document.addEventListener("mouseup", function(eve) {
    if (arrastrar) {
        arrastrar = false;
        btn.style.transition = "background-color 0.3s, transform 0.2s";
    }
});

btn.addEventListener("click", function(e) {
    if (mover) {
        e.preventDefault();
        e.stopImmediatePropagation();
    } else {
        enviar();
    }
});