
const cardList = document.querySelector('.other-films__list');

const createCard = (item) => {
        const card = document.createElement('li');
        card.className = 'other-films__item';

        const link = document.createElement('a');
        link.className = 'other-films__link';
        if (item.vote_average == 0) {
            link.dataset.rating = '--'
        } else {
            link.dataset.rating = item.vote_average;
        }


        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `poster ${item.name || item.title}`;
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;
        link.append(img);
        card.append(link);
        return card;
    };
const renderCard = async (data) => {
    cardList.textContent = ""
    const cards = data.map(createCard)
    cardList.append(...cards);
    console.log(cards)

}


export default renderCard;