import React from "react";
import "./App.css";
const App = () => {
    return (
        <div className="wrapper">
            <form className="search-bar">
                <input
                    className="search-bar__input"
                    type="text"
                    placeholder="Moscow"
                />
                <button className="search-bar__btn icon-btn">
                    <img className="img-svg" src="icon/Shape.svg" alt="shape" />
                </button>
            </form>
            <div className="info">
                <div className="left-info info-block">
                    <div className="left-info__screen active now">
                        <img src="" className="now__icon-heart" alt="heart" />
                        <div className="now__temperature"></div>
                        <div className="now__city-name city-name"></div>
                    </div>
                    <div className="left-info__screen detalis">
                        <div className="detalis__city-name city-name"></div>
                        <ul className="detalis__list">
                            <li className="detalis__item detalis__item-temp"></li>
                            <li className="detalis__item detalis__item-like"></li>
                            <li className="detalis__item detalis__item-weather"></li>
                            <li className="detalis__item detalis__item-sunrise"></li>
                            <li className="detalis__item detalis__item-sunset"></li>
                        </ul>
                    </div>
                    <div className="left-info__screen forecast">
                        <div className="forecast__wrapper">
                            <div className="forecast__city-name city-name">
                                Aktobe
                            </div>
                            <div className="forecast__list-weeks"></div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn tab active">Now</button>
                        <button className="btn tab">Detalis</button>
                        <button className="btn tab">Forecast</button>
                    </div>
                </div>
                <div className="right-info info-block">
                    <div className="right-info__locations">
                        <div className="locations__name">Added Locations:</div>
                        <ul className="locations__list"></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
