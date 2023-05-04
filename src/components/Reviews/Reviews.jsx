import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'NewsApiService';
import css from './Reviews.module.css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .catch(error => console.log('Error', error));
  }, [movieId]);

  return (
    <div>
      <h2 className={css.subTitle}>Movie Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <p className={css.subTitle}>{review.author}</p>
            {review.content ? (
              <p className={css.text}>{review.content}</p>
            ) : (
              <p>We don't have any reviews for this movie</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
