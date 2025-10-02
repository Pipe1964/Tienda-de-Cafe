document.addEventListener("DOMContentLoaded",() => {
const botonComprar = document.querySelectorAll(".comprar");
const carrito = document.getElementById("carrito");
const contador = document.getElementById("contador");

let cantidad = 0;

botonComprar.forEach(boton => {
    boton.addEventListener("click", () => {
        cantidad++;
    contador.textContent = cantidad;

    carrito.classList.add("mostrar");


});
});
});



