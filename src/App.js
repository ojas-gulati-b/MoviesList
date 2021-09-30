import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/Movie/MoviesList/MoviesList';
import Search from './components/Common/Search/Search';

const App = () => {
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  // Shall only fire once
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className='movie-list-app'>
      <div className='wrapper'>
        <Search />
        <div className=''>
          <MovieList movies={movies} />
        </div>
      </div>
		</div>
	);
};

export default App;