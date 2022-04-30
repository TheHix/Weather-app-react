import React from "react";
import "./App.css";
const App = () => {
    return (
        <div className="wrapper">
            <form className="search__bar">
                <input
                    className="search__bar__input"
                    type="text"
                    placeholder="Moscow"
                />
                <button className="search__bar__btn iconBtn" type="submit">
                    <img className="img-svg" src="icon/Shape.svg" alt="" />
                </button>
            </form>
            <div className="info">
                <div className="info__left info-block">
                    <div className="info__left__screen active">
                        <img src="" alt="" />
                        <svg
                            className="screen__HeartIcon iconBtn"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.54"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                                stroke="black"
                                stroke-width="2"
                            />
                        </svg>
                        <div className="screen__temperature"></div>
                        <div className="screen__CityName__TabNow cityName"></div>
                    </div>
                    <div className="info__left__screen">
                        <div className="screen__CityName__TabDetalis cityName"></div>
                        <ul className="screen__detalis">
                            <li className="det__temp"></li>
                            <li className="det__like"></li>
                            <li className="det__weather"></li>
                            <li className="det__sunrise"></li>
                            <li className="det__sunset"></li>
                        </ul>
                    </div>
                    <div className="info__left__screen">
                        <div className="info__left__screen-block">
                            <div className="screen-block__CityName__foreCast cityName">
                                Aktobe
                            </div>
                            <div className="screen-block__ListWeeks"></div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn tab active">Now</button>
                        <button className="btn tab">Detalis</button>
                        <button className="btn tab">Forecast</button>
                    </div>
                </div>
                <div className="info__right info-block">
                    <div className="info__right__locations">
                        <div className="locations__name">Added Locations:</div>
                        <ul className="locations__list"></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
