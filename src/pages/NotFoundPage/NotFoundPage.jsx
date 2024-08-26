import { Link } from 'react-router-dom';
import movieDefault from '../../img/movie.svg';

const NotFoundPage = () => {
  return (
    <>
      
      <div >
        <p >Page not found</p>
        <Link to="/" >
          Return to Homepage
        </Link>
      </div>
      <ul >
        <li >
          <img src={movieDefault} alt="Not found" />
        </li>
        <li >
          <img src={movieDefault} alt="Not found" />
        </li>
        <li >
          <img src={movieDefault} alt="Not found" />
        </li>
        <li >
          <img src={movieDefault} alt="Not found" />
        </li>
        <li >
          <img src={movieDefault} alt="Not found" />
        </li>
      </ul>
    </>
  );
};

export default NotFoundPage;
