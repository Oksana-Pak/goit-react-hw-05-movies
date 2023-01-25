import axios from 'axios';
// import { ErrorMessage } from './components/Services/Notifications';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';
// const IMG_HTTPS = 'https://image.tmdb.org/t/p/w500/';

const fetchApi = async url => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error('Something wrong. Try again.');
  }
};

export const fetchTrendingMovies = async () => {
  const url = `${URL}/trending/movie/day?api_key=${API_KEY}`;
  const response = await fetchApi(url);
  return response.results;
};

export const fetchMoviesDetails = async id => {
  const url = `${URL}/movie/${id}?api_key=${API_KEY}`;
  const response = await fetchApi(url);
  return response;
};

export const fetchMovieCast = async id => {
  const url = `${URL}/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await fetchApi(url);
  return response.cast;
};

export const fetchMovieReviews = async id => {
  const url = `${URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await fetchApi(url);
  // if (!response.result) {
  //   return [];
  // }
  return response.results;
  // console.log(response.results);
};
export const fetchMoviesQuery = async searchName => {
  const url = `${URL}/search/movie?api_key=${API_KEY}&query=${searchName}`;
  const response = await fetchApi(url);
  return response.results;
};
