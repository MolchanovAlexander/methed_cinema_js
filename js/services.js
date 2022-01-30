const API_KEY = '611b38bfc402f47502f495e8b2cf9a96';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=en-US';


function getData(url) {

    return fetch(url).then(response => {

        if (response.ok) {
            return response.json();
        }
        throw `щось пішло не так ${response.status}`;
    })
        .catch(err => console.log(err));
}



export const getTrands = async (type = 'all', period = 'week', page = 1) => {
    console.log('getTrandsrun');
    const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;

    return await getData(url);

}
export const getPopular = async (type, page = 1) => {
    console.log('getPopular run');
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;

    return await getData(url);

};
export const getTop = async (type, page = 1) => {
    console.log('getTop run');
    const url = new URL(`${type}/top_rated`, BASE_URL);
    url.search = `api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};
export const getVideo = async (id, type) => {

    const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
    console.log('getVideo Run count ' +  " url- " + url);
    return await getData(url);
}
export const search = async (query, page) => {
    console.log('search run');
    const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}` +
        `&page=${page}&include_adult=false&query=${query}`;
    return await getData(url);
}


// https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false