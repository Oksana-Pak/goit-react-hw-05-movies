import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'Api';
import { CastList, CastWrap, CastImage, CastDesc } from './MovieCast.styled';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      {!cast.length ? (
        <div>We don't have any cast for this movie.</div>
      ) : (
        <CastList>
          {cast.map(({ id, character, name, profile }) => {
            return (
              <li key={id}>
                <CastWrap>
                  <CastImage src={profile} alt={name} />
                </CastWrap>

                <CastDesc>{name}</CastDesc>
                <CastDesc>Character: {character}</CastDesc>
              </li>
            );
          })}
        </CastList>
      )}
    </div>
  );
};
