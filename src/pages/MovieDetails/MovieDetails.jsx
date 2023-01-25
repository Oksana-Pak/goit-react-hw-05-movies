import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMoviesDetails } from 'Api';
import { useState, useEffect, Suspense } from 'react';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';
import { MovieDetailsInfo } from 'components/MovieDetailsInfo/MovieDetailsInfo';
import { Button } from './MovieDetails.styled';

const IMG_HTTPS = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_IMG =
  'https://am3pap003files.storage.live.com/y4m_HvL5KAiESyoTDP3jwePcJ2IAFJni1e14N6B4QiyTs_XJ0gh4n50et2DJWTz1TqKEQzcELMj--Egqlh3XupoCCZTx8_AVjEMZtyQEgcVTy70R5fUJlvW6DIjGJdaoPwIeiLWzXd-dUEhJd5rQXn7mtuHU4HfRB9fvcjcVDv6Uz-B3rkIxtIbSwKy6eYP4K7L?width=200&height=300&cropmode=none';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesDetails(Number(movieId)).then(
      ({
        poster_path,
        release_date,
        vote_average,
        overview,
        genres,
        title,
      }) => {
        let src;
        !poster_path ? (src = DEFAULT_IMG) : (src = IMG_HTTPS + poster_path);

        setMovie({
          poster: src,
          date: release_date.slice(0, 4),
          vote_average,
          overview,
          genres: genres.map(({ name }) => name).join(', '),
          title,
        });
      }
    );
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
