const API_KEY = 'f250076af8e178f34eb0c5b722a66f8c';

export const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    });
    
}
export const getSearchMovies = e => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${e}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    });
    
};

export const getMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Response was not ok.');
    }
  });
};

export const getMovieCredits = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    });
    
};

export const getMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Response was not ok.');
      }
    });
    
};