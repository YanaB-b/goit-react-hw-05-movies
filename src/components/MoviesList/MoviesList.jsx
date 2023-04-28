import { NavLink, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink
            state={{ from: location }}
            className={css.item}
            to={`${movie.id}`}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


export default MoviesList;