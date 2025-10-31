import { carrossel } from "./assets/js/pages/index/banner.js";
import { maskCpf, maskPhone, maskCep } from "./assets/js/pages/cadastro/formulario.js";

const root = document.querySelector("#root");

window.addEventListener("load", () => {
    switch (window.location.hash) {
    case "#home":
        fetch("home.html")
          .then((res) => res.text())
          .then((data) => {
            document.getElementById("root").innerHTML = data
            carrossel()
        });
        break;
      case "#cadastro":
        fetch("cadastro.html")
          .then((res) => res.text())
          .then((data) => {
            document.getElementById("root").innerHTML = data
            document.getElementById("cpf").addEventListener("keyup", maskCpf);
            document.getElementById("phone").addEventListener("keyup", maskPhone);
            document.getElementById("cep").addEventListener("keyup", maskCep);
          });
        break;
      case "#projetos":
        fetch("projetos.html")
          .then((res) => res.text())
          .then((data) => (document.getElementById("root").innerHTML = data));
        break;
      case "#noticias":
        fetch("noticias.html")
          .then((res) => res.text())
          .then((data) => (document.getElementById("root").innerHTML = data));
        break;
      default:
        root.innerHTML = "<home>Página não encontrada</home>";
        break;
    }
})

window.addEventListener("hashchange", () => {
  switch (window.location.hash) {
    case "#home":
        fetch("home.html")
          .then((res) => res.text())
          .then((data) => {
            document.getElementById("root").innerHTML = data
            carrossel();
        });
        break;
      case "#cadastro":
        fetch("cadastro.html")
          .then((res) => res.text())
          .then((data) => {
            document.getElementById("root").innerHTML = data
            document.getElementById("cpf").addEventListener("keyup", maskCpf);
            document.getElementById("phone").addEventListener("keyup", maskPhone);
            document.getElementById("cep").addEventListener("keyup", maskCep);
          });
        break;
      case "#projetos":
        fetch("projetos.html")
          .then((res) => res.text())
          .then((data) => (document.getElementById("root").innerHTML = data));
        break;
      case "#noticias":
        fetch("noticias.html")
          .then((res) => res.text())
          .then((data) => (document.getElementById("root").innerHTML = data));
        break;
      default:
        root.innerHTML = "<home></home>";
        break;
    }
});

