import React, { useState, useEffect } from 'react';

import { getSearchMovies } from 'NewsApiService';
import css from './Movies.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
const { useSearchParams } = require('react-router-dom');
const Movies = () => {
  
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  
  useEffect(() => {
    if (!query) return;
    async function uploadMovies(query) {
      
      try {
        const data = await getSearchMovies(query);
        const movies = data.results;
        if (!data.total_results) {
          throw new Error('No data');
        } else {
          setMovies(movies);
          setStatus('resolved');
        }
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      } finally {
        
      }
    }
    uploadMovies(query);
  }, [query]);





  const handleSubmit = inputValue => {
    inputValue.preventDefault();
    if (!inputValue) {
      setSearchParams({});
      setMovies([]);
    } else {
      setSearchParams({ query: inputValue });
    }
  };
  

  return (
    <div className={css.section}>
      <h2 className={css.title}>Search Movies</h2>
     
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={e => setSearchParams({ query: e.target.value })}
        
      />
      <button className={css.button} onClick={handleSubmit}>
        Search
      </button>
     
      <MoviesList movies={movies}></MoviesList>
      {error && <h2>{error} There are not movies</h2>}
      {movies.length === 0 && status === 'resolved' && (
        <h3>Nothing was found. Please try another search.</h3>
      )}
    </div>
  );
};

export default Movies;