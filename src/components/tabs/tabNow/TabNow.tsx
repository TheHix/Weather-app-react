import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import heart from "../../../img/heart.svg";
import { fetchCurrentWeather } from "../../../store/action-creater/currentWeather";
import { getTempInCelsius } from "../../../tools/transform";
import Loader from "../../Loader";
const TabNow = () => {
    const { currentWether, error, loading } = useTypedSelector(
        store => store.currentWeather
    );
    if (error) {
        return <div className="left-info__screen error">{error}</div>;
    }
    if (loading || !currentWether) {
        return <Loader />;
    }
    return (
        <div className="left-info__screen now">
            <img
                className="now__WeatherIcon"
                src={`https://openweathermap.org/img/wn/${
                    currentWether!.weather[0]["icon"]
                }@4x.png`}
                alt="pressF"
            ></img>
            <img src={heart} className="now__icon-heart icon-btn" alt="heart" />
            <div className="now__temperature">
                {getTempInCelsius(currentWether!.main.temp)}°
            </div>
            <div className="now__city-name city-name">
                {currentWether!.name}
            </div>
        </div>
    );
};

export default TabNow;
