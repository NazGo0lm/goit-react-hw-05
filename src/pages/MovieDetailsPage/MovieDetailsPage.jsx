import { detailsMovies } from '../../apiMovies/apiRequest';
import { useState, useEffect, useRef, Suspense } from 'react';
import {
  useLocation,
  Link,
  Outlet,
  NavLink,
  useParams,
} from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import movieDefault from '../../img/avatar-default.svg';


const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/');

  useEffect(() => {
    async function getMovies() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await detailsMovies(movieId);
        setMovie(data);
        // console.log(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieId]);
  // console.log(movie);
  return (
    <main>
      <Link to={backLinkHref.current} >
        <HiArrowLeft size="24" />
        Go back
      </Link>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <div >
        <img
          
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : movieDefault
          }
          alt={movie.title}
        />

        <div >
          <h2 >{movie.title}</h2>
          <p >{movie.overview}</p>
        </div>
      </div>

      <ul >
        <li>
          <NavLink to="cast" >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;