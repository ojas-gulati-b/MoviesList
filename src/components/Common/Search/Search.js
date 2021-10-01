import React, { useState } from 'react';
import './Search.css';
import searchLogo from '../../../assets/images/search.png';

const Search = (props) => {

    const [searchInput, setSearchInput] = useState('');

    const searchHandler = (event) => {
        event.preventDefault();
        props.onSearch(searchInput);
        // setSearchInput('');
    }

    return (
        <div className="search-wrapper">
            <form onSubmit={(event) => searchHandler(event)}>
                <div className="search">
                    <input type="text" className="search-input" value={searchInput}
                        placeholder="Enter the movie title" onInput={(event) => setSearchInput(event.target.value)} />
                    <button type='submit' className="search-button" >
                        <img src={searchLogo} alt="" />
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Search;