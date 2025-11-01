const btMenu = document.querySelector('#menu-check')
const iconMenu = document.querySelector('.icon-menu')
const menu = document.querySelector('.header__menu')


document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !btMenu.contains(e.target)){
        menu.style.transform = 'translateX(100%)'
        console.log(e.target)
    }
    else{
        menu.style.transform = 'translateX(0)'
    }
})