import slideMenu from './menu.js'
window.onload = function () {

    slideMenu({
        open_btn: '.header__burger-btn',
        menu: '.navigation',
        classActivMenu: 'navigation_active',
        close_trigger: '.navigation__link, .navigation__close'
    });


}
