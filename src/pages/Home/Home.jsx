import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'Api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
