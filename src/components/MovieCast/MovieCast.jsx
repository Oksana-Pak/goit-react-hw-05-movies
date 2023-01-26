import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'Api';
import { CastList, CastWrap, CastImage, CastDesc } from './MovieCast.styled';

const IMG_HTTPS = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_IMG =
  'https://am3pap003files.storage.live.com/y4m_HvL5KAiESyoTDP3jwePcJ2IAFJni1e14N6B4QiyTs_XJ0gh4n50et2DJWTz1TqKEQzcELMj--Egqlh3XupoCCZTx8_AVjEMZtyQEgcVTy70R5fUJlvW6DIjGJdaoPwIeiLWzXd-dUEhJd5rQXn7mtuHU4HfRB9fvcjcVDv6Uz-B3rkIxtIbSwKy6eYP4K7L?width=200&height=300&cropmode=none';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  let src;
  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      {!cast.length ? (
        <div>We don't have any cast for this movie.</div>
      ) : (
        <CastList>
          {cast.map(({ cast_id: id, character, name, profile_path }) => {
            console.log(cast);
            !profile_path
              ? (src = DEFAULT_IMG)
              : (src = IMG_HTTPS + profile_path);

            return (
              <li key={id}>
                <CastWrap>
                  <CastImage src={src} alt={name} />
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
