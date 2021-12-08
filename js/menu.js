const openMenu = (nav, classOpen) => {
    nav.classList.add(classOpen);
}
const closeMenu = (nav, classOpen) => {
    nav.classList.remove(classOpen);
}






const slideMenu = ({open_btn, menu, classActivMenu, close_trigger}) => {
    const burgerBtn = document.querySelector(open_btn);
    const navigation = document.querySelector(menu);
    burgerBtn.addEventListener('click', ()=>{
        openMenu(navigation, classActivMenu);
    });
    const navClose = document.querySelectorAll(close_trigger);
    navClose.forEach((item)=>{
        item.addEventListener('click', ()=>{
            closeMenu(navigation, classActivMenu);
        });
    });
    
}

export default slideMenu;