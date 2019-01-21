
function cambiarColor() {
    let nuevoColor = crearColorRGB();
    document.getElementsByTagName("body")[0].style.backgroundColor = nuevoColor;
    //muestra el código rgb del color
    document.getElementById("random-rgb").innerHTML = nuevoColor;
}

function crearColorRGB() {
    const arrayRGB = [];
    for (let i = 0; i < 3; i++) {
        let numero = Math.floor(Math.random() * 256);
        arrayRGB.push(numero);
    }
    const stringRGB = "rgb(" + arrayRGB.toString() + ")";
    return stringRGB;
}