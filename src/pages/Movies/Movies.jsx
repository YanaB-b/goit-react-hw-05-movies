import React, { useState } from 'react';
import { getSearchMovies } from 'NewsApiService';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    getSearchMovies(query)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(error => {
        console.log('Error', error);
        setStatus('rejected');
      });
  };

  return (
    <div className={css.section}>
      <h2 className={css.title}>Search Movies</h2>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        
      />
      <button className={css.button} onClick={handleSubmit}>
        Search
      </button>
      <MoviesList movies={movies}></MoviesList>
      {movies.length === 0 && status === 'resolved' && (
        <h3>Nothing was found. Please try another search.</h3>
      )}
    </div>
  );
};

export default Movies;