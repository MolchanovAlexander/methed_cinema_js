import { getVideo } from "./services.js";

const cardList = document.querySelector('.other-films__list');
//item.media_type
const renderCard = (data, type  ) => {
    cardList.textContent = "";

    Promise.all(data.map(async(item) => {

        let key = 0;
        const video = await getVideo(item.id, type || item.media_type)

        if (video.results[0]) {
            key = video.results[0]?.key;
        }


        const card = document.createElement('li');
        card.className = 'other-films__item';

        const link = document.createElement('a');
        if (key) link.href = `https://youtu.be/${key}`;
        link.className = 'other-films__link';
        if (item.vote_average == 0) {
            link.dataset.rating = '--'
        } else {
            link.dataset.rating = item.vote_average;
        }


        const img = document.createElement('img');
        img.className = 'other-films__img';

        img.alt = `poster ${item.name || item.title}`;

        img.src = item.poster_path ?
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` :
            './img/0poster.png';
        link.append(img);
        card.append(link);
        return card;
    })).then(cards => cardList.append(...cards))


}


export default renderCard;