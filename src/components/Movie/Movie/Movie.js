import React from 'react';
import Expansion from '../../Common/Expansion/Expansion';
import './Movie.css';

const Movie = ({ movie = {} }) => {
    return (
        <div className='movie'>
            <Expansion>
                <div id='head' className='movie-head'>
                    <img src={movie.Poster} alt='Poster' />
                    <div className='movie-title'>{movie.Title}</div>
                </div>
                <div id='body' className='movie-body'>
                    <div className='detail-wrapper'>
                        <div className='detail-heading'>Feature Type</div>
                        <div className='detail-body'>
                            {movie.Type ? movie.Type : 'No information available'}
                        </div>
                    </div>
                    <div className='detail-wrapper'>
                        <div className='detail-heading'>Year of release</div>
                        <div className='detail-body'>
                            {movie.Year ? movie.Year : 'No information available'}
                        </div>
                    </div>
                </div>
            </Expansion>
        </div>
    );
};

export default Movie;