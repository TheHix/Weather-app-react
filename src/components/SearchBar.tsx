import React from 'react';
import Shape from '../img/Shape.svg';
const SearchBar = () => {
    return (
        <form className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Moscow"
            />
            <button className="search-bar__btn icon-btn">
                <img className="img-svg" src={Shape} alt="shape" />
            </button>
        </form>
    );
};

export default SearchBar;