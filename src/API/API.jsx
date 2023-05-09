import axios from 'axios';

const API_KEY = 'd1209b93bfca019c1d550689906b1b5c';
const URL = 'https://api.themoviedb.org/3/';
// const URL = 'https://api.themoviedb.org/3/trending/movie/day';

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

export const fetchTrendy = async () => {
 
  const ressponse = await axios(`${URL}trending/movie/day?api_key=${API_KEY}`);
  return ressponse.data;
};



export const fetchById = async (movieId) => {
  const ressponse = await axios(`${URL}movie/${movieId}?api_key=${API_KEY}`);
  return ressponse.data;
};


export const fetchByQuery = async (query) => {
  const controller = new AbortController()
  const ressponse = await axios(`${URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,{signal: controller.signal});
  return ressponse.data;
};


export const fetchCreditsById = async (movieId) => {
  const ressponse = await axios(`${URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return ressponse.data;
};


export const fetchReviewById = async (movieId) => {
  const ressponse = await axios(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return ressponse.data;
};