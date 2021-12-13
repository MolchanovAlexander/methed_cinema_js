import {search as searchService } from './services.js'
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');

const search = ()=>{
    searchForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(!searchInput.value) return;
        searchService(searchInput.value)
        .then(data =>{
            if(data.results.length){
                renderCard(data.results);
            }else{
                throw 'Нажаль нічого не знайдено'
            }
        })
        .then(()=>{
            filmWeek.remove();
            title.textContent= 'Результат пошуку'
        })
        .catch(err =>{
            title.textContent = err
        })
    })
    search
}

export default search;