import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

const MoviesList = ({ movies = [], initialLoad = true }) => {
    let renderedList;
    if (movies && movies.length > 0) {
        renderedList = movies.map((movie, index) => (
            <Movie key={movie.imdbID} movie={movie}></Movie>
        ));
    } else {
        renderedList = <div className='no-movies'>
            {initialLoad ? 'Please search a movie' : 'No movies found for the search criteria'}
        </div>
    }
    return (
        <div className='movie-list-wrapper'>
            {renderedList}
        </div>
    );
};

export default MoviesList;