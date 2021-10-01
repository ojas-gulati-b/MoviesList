import React, { Fragment } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';

const MoviesList = ({movies=[]}) => {
    let renderedList;
    if(movies && movies.length > 0){
        renderedList = movies.map((movie, index) => (
            <Movie key={movie.imdbID} movie={movie}></Movie>
        ));
    } else {
        renderedList = <div className='no-movies'>No movies found for the search criterea</div>
    }
    return (
        <div className='movie-list-wrapper'>
            {renderedList}
        </div>
    );
};

export default MoviesList;