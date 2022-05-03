import React, { useState } from "react";
import Shape from "../img/Shape.svg";
import { fetchForecasts } from "../store/action-creater/forecast";
const SearchBar = () => {
    const [value, setValue] = useState("");
    
    const getWeather = () => {
        fetchForecasts(value);
    }
    return (
        <form className="search-bar">
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                onClick={getWeather}
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
