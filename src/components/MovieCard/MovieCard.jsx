import { Link, useLocation } from 'react-router-dom';
import movieDefault from '../../img/avatar-default.svg';


const MovieCard = ({ movie }) => {
  const location = useLocation();
  return (
    <Link  to={`/movies/${movie.id}`} state={location}>
      {/* <div > */}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : movieDefault
          }
          alt={movie.title}
        />
      {/* </div> */}
    </Link>
  );
};

export default MovieCard;