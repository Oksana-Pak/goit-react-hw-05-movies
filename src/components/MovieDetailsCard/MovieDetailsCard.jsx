import PropTypes from 'prop-types';
import {
  ContainerInfo,
  MovieImage,
  MovieContainer,
} from './MovieDetailsCard.styled';

export const MovieDetailsCard = ({ movie }) => {
  const { poster, date, vote_average, overview, genres, title } = movie;

  return (
    <>
      <ContainerInfo>
        <MovieImage src={poster} alt={title} />
        <MovieContainer>
          <h2>
            {title} ({date})
          </h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </MovieContainer>
      </ContainerInfo>
    </>
  );
};

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
