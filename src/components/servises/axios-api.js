import axios from 'axios';
const API_KEY = `d6e594172c33afd2a5e4738620913491`;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data.results
};

export const getSearchMovie = async (searchQuery) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return data;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};
export const getMovieCredits = async (movieId) => {
  const {data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};
