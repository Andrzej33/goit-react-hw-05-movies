import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchReviewById } from 'API/API';
import { Loader } from 'components/Loader/Loader';
import { ReviewsList } from './ReviewsStyled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      setIsLoading(true);
      try {
        const res = await fetchReviewById(movieId);
        const { results } = res;
        setReviews(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length ? (
        <ReviewsList>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>This movie has no reviews</p>
      )}
    </>
  );
};

export default Reviews;
