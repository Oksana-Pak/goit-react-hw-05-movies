import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesDetails } from 'Api';
import { useState, useEffect, Suspense } from 'react';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { MovieDetailsInfo } from 'components/MovieDetailsInfo/MovieDetailsInfo';
import { Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesDetails(Number(movieId)).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <Button to={location?.state?.from ?? '/'}>Go back</Button>

      <MovieDetailsCard movie={movie} />
      <MovieDetailsInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
