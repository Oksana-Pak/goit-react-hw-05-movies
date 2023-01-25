import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api';
import { ReviewsTitle } from './MovieReviews.styled';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {!reviews.length ? (
        <div>We don't have any reviews for this movie.</div>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewsTitle>Author: {author}</ReviewsTitle>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
