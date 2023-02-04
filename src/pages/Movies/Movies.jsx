import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesQuery } from 'Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Input } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value.trim().toLowerCase();
    if (!query) {
      return;
    }

    setSearchParams({ query });

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
        <Input type="text" name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      {searchMovies && <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
