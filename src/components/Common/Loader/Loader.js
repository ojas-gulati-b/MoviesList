import React from 'react';
import loaderGif from '../../../assets/images/Loader.gif';
import './Loader.css';

const Loader = () => {
    return (<div className='loader'><img src={loaderGif} alt="Loading..." /></div> )
}

export default Loader;
