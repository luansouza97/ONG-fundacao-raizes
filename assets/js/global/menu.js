const btMenu = document.querySelector('#menu-check')
const iconMenu = document.querySelector('.header__menu-hamburguer')
const menu = document.querySelector('.header__menu')
const ul = document.querySelector('ul')



document.addEventListener('click', (e) => {
    if (ul.style.display == 'flex') {
        if(!menu.contains(e.target) && !btMenu.contains(e.target)){
            menu.style.transform = 'translateX(100%)'
        }
        else{
            menu.style.transform = 'translateX(0)'
        }
    }
})