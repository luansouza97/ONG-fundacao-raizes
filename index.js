import { carrossel } from "./assets/js/pages/index/banner.js";
import { maskCpf, maskPhone, maskCep } from "./assets/js/pages/cadastro/formulario.js";

const root = document.querySelector("#root");

async function loadPage(namePage) {
  const page = await fetch(`${namePage}.html`);

  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());
  
  const cssPath = `./assets/css/pages/${namePage}/${namePage}.css`;
  fetch(cssPath, {method: 'HEAD'})
    .then(res => {
      if (res.ok){
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
      }
    })

  return page.text();
}

async function exibirPage(page) {
  root.innerHTML = await loadPage(page);
  
}

(async () => {
  root.innerHTML = await loadPage('home');
  carrossel();
  renderPage();
})();

window.addEventListener('hashchange', renderPage)

function renderPage(){
  switch (window.location.hash) {
    case "#home":
      exibirPage('home');
      carrossel();
      break;
    case "#cadastro":
      exibirPage('cadastro');
      maskCpf();
      maskPhone();
      maskCep();
      break;
    case "#projetos":
      exibirPage('projetos');
      break;
    case "#noticias":
      exibirPage('noticias');
      break;
    default:
      exibirPage('home');
      break;
  }
}


