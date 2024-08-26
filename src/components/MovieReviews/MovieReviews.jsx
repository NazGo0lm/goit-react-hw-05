import { useState, useEffect } from 'react';
import { reviewsMovies } from '../../apiMovies/apiRequest';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import defaultAvatar from '../../img/avatar-default.svg';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesReviews() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await reviewsMovies(movieId);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesReviews();
  }, [movieId]);
  // console.log(results);
  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {reviews.length > 0 ? (
        <ul >
          {reviews.map(review => {
            return (
              <li key={review.id} >
                <img
                  
                  src={
                    review.author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                      : defaultAvatar
                  }
                  alt={review.author}
                />
                
                  <p >
                    {review.author}&nbsp;
                    <span>
                      (user rating:&nbsp;
                      {review.author_details.rating
                        ? review.author_details.rating
                        : 'unrated'}
                      )
                    </span>
                  </p>
                  <p>{review.content}</p>
                
              </li>
            );
          })}
        </ul>
      ) : (
        <p >There are no reviews.</p>
      )}
    </>
  );
};

export default MovieReviews;