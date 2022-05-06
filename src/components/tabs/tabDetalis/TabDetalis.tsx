import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
    getCompleteWeatherInformation,
    getTempInCelsius,
    getTimeFromUNIX,
} from "../../../tools/transform";
import Loader from "../../Loader";

const TabDetalis = () => {
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
        <div className="left-info__screen detalis">
            <div className="detalis__city-name city-name">
                {currentWether!.name}
            </div>
            <ul className="detalis__list">
                <li className="detalis__item detalis__item-like">
                    Feels like:{" "}
                    {getTempInCelsius(currentWether!.main.feels_like)}°
                </li>
                <li className="detalis__item detalis__item-weather">
                    Weather:{" "}
                    {getCompleteWeatherInformation(currentWether!.weather)}
                </li>
                <li className="detalis__item detalis__item-sunrise">
                    Sunrise: {getTimeFromUNIX(currentWether!.sys.sunrise)}
                </li>
                <li className="detalis__item detalis__item-sunset">
                    Sunset: {getTimeFromUNIX(currentWether!.sys.sunset)}
                </li>
            </ul>
        </div>
    );
};

export default TabDetalis;
