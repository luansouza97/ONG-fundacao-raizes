const btModoEscuro = document.querySelector(".btModoEscuro");
const iconModoEscuro = document.querySelector(".fa-moon");
const body = document.querySelector("body");

function modoEscuro() {
    body.classList.toggle("modoEscuro");
    btModoEscuro.classList.toggle("btModoClaro");
    iconModoEscuro.classList.toggle("fa-moon");
    iconModoEscuro.classList.toggle("fa-sun");
}