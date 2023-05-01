import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            state={{ from: location }}
            className={css.item}
            to={`/movies/${movie.id}`}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};


export default MoviesList;