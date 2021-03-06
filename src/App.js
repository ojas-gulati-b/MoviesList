import React, { useState } from 'react';
import './App.css';
import MovieList from './components/Movie/MoviesList/MoviesList';
import Search from './components/Common/Search/Search';
import Loader from './components/Common/Loader/Loader';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);

  const getMovies = async (param) => {
    let response, responseJson;

    setInitialLoad(false);
    setisLoading(true);
    setMovies([])
    const url = `https://www.omdbapi.com/?s=${param}&apikey=50139094`;

    try {
      response = await fetch(url);
      responseJson = await response.json();
      setisLoading(false);
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      if (responseJson.Search) {
        setMovies(responseJson.Search);
        setError('');
      }
    } catch (err) {
      setError('Something bad happened please try again');
    }

  };

  return (
    <div className='movie-list-app'>
      <div className='wrapper'>
        <h1>Find My Movie</h1>
        <Search onSearch={getMovies} />
        {isLoading ? <Loader /> : error ? <h3 className='error'>{error}</h3> : <MovieList movies={movies} initialLoad={initialLoad}/>}
      </div>
    </div>
  );
};

export default App;