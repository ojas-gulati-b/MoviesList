import React, { Fragment } from 'react';
import Expansion from '../../Common/Expansion/Expansion';

const Movie = (props) => {
    return (
        <div className='movie'>
            <Expansion>
                <div id='head'>Head</div>
                <div id='body'>Body</div>
            </Expansion>
        </div>
    );
};

export default Movie;