import { getPopular, getTop, getTrands } from "./services.js";

import renderCard from "./renderCard.js";

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');

const triggerNav = e => {
    const target = e.target.closest('.get-nav__link')
    if (target) {
        e.preventDefault();

        filmWeek.style.display = 'none';
        title.textContent = target.textContent;
        if (target.classList.contains('get-nav__link_popular-movies')) {
            getPopular('movie', 1)
                .then(data => renderCard(data.results, 'movie'));
        }
        if (target.classList.contains('get-nav__link_popular-tv')) {
            getPopular('tv')
                .then(data => renderCard(data.results, 'tv'));
        }
        if (target.classList.contains('get-nav__link_top-tv')) {
            getTop('tv')
                .then(data => renderCard(data.results, 'tv'));
        }
        if (target.classList.contains('get-nav__link_top-movies')) {
            getTop('movie')
                .then(data => renderCard(data.results, 'movie'));
        }
        if (target.classList.contains('get-nav__link_triends')) {
            getTrands()
                .then(data => renderCard(data.results));
        }


    }
}
const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', triggerNav)
    })
}


export default menuLink;