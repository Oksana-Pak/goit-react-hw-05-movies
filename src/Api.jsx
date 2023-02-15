import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';
const IMG_HTTPS = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_IMG =
  'https://am3pap003files.storage.live.com/y4mQDGZkmr2pke4Mqgf6WjwM_LWR3Etj6xsRO1qFsi9Btl29_a6IL-U-9Bk52JTwQcBSulz69OjzpgIGJbOCh0lUecxyMJTzLk3tVTOUJLx8x-Bos-S7nWZI8bxK4qb0iMQkNTzTelS6QhA9SH4Mu_wO7sHENvEGIh9mndC-Nsk6J2K8StfP1V2etc21yJhLck3?width=225&height=225&cropmode=none';
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
  const response = await fetchApi(url).then(
    ({ poster_path, release_date, vote_average, overview, genres, title }) => ({
      poster: getPoster(poster_path),
      date: release_date.slice(0, 4),
      vote_average,
      overview,
      genres: genres.map(({ name }) => name).join(', '),
      title,
    })
  );
  return response;
};

export const fetchMovieCast = async id => {
  const url = `${URL}/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await fetchApi(url);

  return response.cast.map(({ cast_id, character, name, profile_path }) => ({
    id: cast_id,
    character,
    name,
    profile: getPoster(profile_path),
  }));
};

export const fetchMovieReviews = async id => {
  const url = `${URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await fetchApi(url);
  return response.results;
};
export const fetchMoviesQuery = async searchName => {
  const url = `${URL}/search/movie?api_key=${API_KEY}&query=${searchName}`;
  const response = await fetchApi(url);
  return response.results;
};

const getPoster = poster => (poster ? IMG_HTTPS + poster : DEFAULT_IMG);
