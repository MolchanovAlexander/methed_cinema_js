import slideMenu from './menu.js'
import renderVideo from './renderVideo.js'



slideMenu({
    open_btn: '.header__burger-btn',
    menu: '.navigation',
    classActivMenu: 'navigation_active',
    close_trigger: '.navigation__link, .navigation__close'
});

renderVideo();

