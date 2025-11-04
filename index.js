import { carrossel } from "./assets/js/pages/index/banner.js";

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

async function renderPage(){
  switch (window.location.hash) {
    case "#home":
      await exibirPage('home');
      carrossel();
      break;
    case "#cadastro":
      await exibirPage("cadastro");
      import("./assets/js/pages/cadastro/formulario.js").then(module => {
        module.applyMasks(); // aplica os eventos somente após o HTML estar no DOM
      });
      break;
    case "#projetos":
      await exibirPage('projetos');
      break;
    case "#noticias":
      await exibirPage('noticias');
      break;
    default:
      await exibirPage('home');
      carrossel();
      break;
  }
}


