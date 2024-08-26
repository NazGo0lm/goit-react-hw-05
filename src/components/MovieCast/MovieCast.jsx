import { useState, useEffect } from 'react';
import { creditsMovies } from '../../apiMovies/apiRequest';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import defaultAvatar from '../../img/avatar-default.svg';

const MovieCast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesCredits() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await creditsMovies(movieId);
        setCasts(data.cast);
        console.log(data.cast);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesCredits();
  }, [movieId]);
  console.log(casts);
  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ul >
        {casts.map(cast => {
          return (
            <li key={cast.cast_id} >
              <img
                
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                    : defaultAvatar
                }
                alt={cast.name}
              />
              <p >{cast.name}</p>
              <p >
                Character: {cast.character}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCast;