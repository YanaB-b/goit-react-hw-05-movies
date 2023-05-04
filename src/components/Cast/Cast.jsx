import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'NewsApiService';
import dafaultimages from './dafaultimages.jpg';
import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <h2 className={css.subTitle}>Movie Cast</h2>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : dafaultimages
              }
              alt={actor.name}
              width="100"
            />

            <h3 className={css.subTitle}>{actor.name}</h3>
            <p className={css.text}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;