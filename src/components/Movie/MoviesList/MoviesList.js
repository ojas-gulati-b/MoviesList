import React, { Fragment } from 'react';
import Movie from '../Movie/Movie';

const MoviesList = ({movies=[]}) => {
    return (
        <Fragment>
            {movies.map((movie, index) => (
                <div key={movie.imdbID} className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'/>
                </div>
            ))}
            <Movie></Movie>
        </Fragment>
    );
};

export default MoviesList;