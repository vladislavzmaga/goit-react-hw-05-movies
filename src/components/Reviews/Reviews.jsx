import { fetchMovieReviews } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(params.movieId).then(respounse => {
      const result = respounse.data.results;
      setReviews(result);
    });
  }, [params.movieId]);
  console.log(reviews);

  if (!reviews) {
    // <h1>We don't have any reviews for this movie!!!</h1>;
    return;
  }
  return (
    <div>
      {reviews.length === 0 && (
        <h2>We don't have any reviews for this movie!!!</h2>
      )}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <span>{review.content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
