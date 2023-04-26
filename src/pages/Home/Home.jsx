import MoviesList from 'components/MoviesList/MoviesList';
import { getTrending } from 'NewsApiService';
import { useEffect, useState } from 'react';
import css from './Home.module.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrendingMoviesToday = () => {
        getTrending()
        .then(data => setMovies(data))
        .catch(error => console.log('Error', error));
    };
    fetchTrendingMoviesToday();
  }, []);

  return (
    <div className={css.section}>
      <h2 className={css.title}>Trending Movies Today</h2>
      <MoviesList movies={movies}></MoviesList>
    </div>
  );
};

export default Home;