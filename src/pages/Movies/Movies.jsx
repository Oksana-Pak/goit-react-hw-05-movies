import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesQuery } from 'Api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Input } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchMovies, setSearchMovies] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });

    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesQuery(query).then(setSearchMovies);
  }, [query]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
