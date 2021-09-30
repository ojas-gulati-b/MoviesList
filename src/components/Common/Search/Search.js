import React, { Fragment } from 'react';
import './Search.css';
import searchLogo from '../../../assets/search.png';

const Search = ({searchInput = ''}) => {

    return (
        <div className="search-wrapper">
                <div className="search">
                    <input type="text" className="search-input" placeholder="Enter the movie title" />
                    <button type="submit" className="search-button">
                      <img src={searchLogo} alt="" />
                   </button>
                 </div>
        </div>
    );
};

export default Search;