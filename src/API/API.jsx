import axios from 'axios';

const API_KEY = 'd1209b93bfca019c1d550689906b1b5c';
const URL = 'https://api.themoviedb.org/3/trending/movie/day';

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

export const fetchTrendy = async () => {
  const OPTIONS = new URLSearchParams({
    api_key: API_KEY,
    // query,
    // media_type: 'movie',
    // time_window: 'week',
    // per_page: 20,
  });
  const ressponse = await axios(`${URL}?${OPTIONS}`);
  return ressponse.data;
};