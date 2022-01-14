

const slideMenu = ({ open_btn, menu, classActivMenu, close_trigger }) => {
    const burgerBtn = document.querySelector(open_btn);
    const navigation = document.querySelector(menu);
    const navClose = document.querySelectorAll(close_trigger);

    const closeMenu = (event) => {

        if (event._nav || event.target?.closest(menu) && !event.target?.closest(close_trigger)) {
            return
        }
        navigation.classList.remove(classActivMenu);
        document.removeEventListener('click', closeMenu);

    }
    burgerBtn.addEventListener('click', (event) => {
        navigation.classList.add(classActivMenu);
        event._nav = true;
        document.addEventListener('click', closeMenu);
    });

    navClose.forEach((item) => {
        item.addEventListener('click', () => {
            closeMenu(navigation, classActivMenu);
        });
    });

}

export default slideMenu;
