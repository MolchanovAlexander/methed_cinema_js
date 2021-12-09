const API_KEY = '611b38bfc402f47502f495e8b2cf9a96';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';


//trending/all/day?api_key=<<api_key>>
const getData = url => {
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `щось пішло не так ${response.status}`
    })
        .catch(err => console.log(err))
}

export const getTrands = async (type = 'all', period = 'week', page = 1) => {
    const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);

}
export const getPopular = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};
export const getTop = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};