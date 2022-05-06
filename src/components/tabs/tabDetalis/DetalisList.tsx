import React from "react";
import {
    getCompleteWeatherInformation,
    getTempInCelsius,
    getTimeFromUNIX,
} from "../../../tools/transform";
import { ICurrentWether } from "../../../types/currentWeather";

interface currentWetherProps {
    currentWether: ICurrentWether;
}
const DetalisList: React.FC<currentWetherProps> = ({ currentWether }) => {
    return (
        <ul className="detalis__list">
            <li className="detalis__item detalis__item-like">
                Temperature: {getTempInCelsius(currentWether!.main.temp)}°
            </li>
            <li className="detalis__item detalis__item-like">
                Feels like: {getTempInCelsius(currentWether!.main.feels_like)}°
            </li>
            <li className="detalis__item detalis__item-weather">
                Weather: {getCompleteWeatherInformation(currentWether!.weather)}
            </li>
            <li className="detalis__item detalis__item-sunrise">
                Sunrise: {getTimeFromUNIX(currentWether!.sys.sunrise)}
            </li>
            <li className="detalis__item detalis__item-sunset">
                Sunset: {getTimeFromUNIX(currentWether!.sys.sunset)}
            </li>
        </ul>
    );
};

export default DetalisList;
