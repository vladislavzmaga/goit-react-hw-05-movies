import { fetchMovieReviews } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(params.movieId).then(respounse => {
      const result = respounse.data.results;
      setReviews(result);
    });
  }, [params.movieId]);

  if (!reviews) {
    return;
  }
  return (
    <div>
      {reviews.length === 0 && (
        <h2>We don't have any reviews for this movie!!!</h2>
      )}
      <ReviewsList>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <span>{review.content}</span>
            </li>
          );
        })}
      </ReviewsList>
    </div>
  );
};
export default Reviews;
