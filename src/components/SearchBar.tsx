import React, { useState } from "react";
import { useAction } from "../hooks/useAction";
import Shape from "../img/Shape.svg";

const SearchBar = () => {
    const [value, setValue] = useState("");
    const { fetchForecasts } = useAction();
    const getWeather = (e: React.FormEvent): void => {
        e.preventDefault();
        fetchForecasts(value);
        setValue("");
    };

    return (
        <form className="search-bar" onSubmit={getWeather}>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
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
