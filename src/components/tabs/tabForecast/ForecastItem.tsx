import React from "react";
import {
    getDay,
    getMonth,
    getTempInCelsius,
    getTime,
} from "../../../tools/transform";
interface IMain {
    temp: number;
    feels_like: number;
}
interface IItem {
    main: IMain;
    weather: any[];
    dt_txt: string;
}
interface ForecastItemProps {
    item: IItem;
}
const ForecastItem: React.FC<ForecastItemProps> = ({ item }) => {
    const { dt_txt, weather: weatherForecast, main } = item;
    const month = getMonth(dt_txt);
    const day = getDay(dt_txt);
    const time = getTime(dt_txt);
    const temp = getTempInCelsius(main.temp).toString();
    const feelsLike = getTempInCelsius(main.feels_like).toString();
    const weather = weatherForecast[0].main;
    const img = `https://openweathermap.org/img/wn/${weatherForecast[0]["icon"]}@2x.png`;
    return (
        <div className="week">
            <div className="week__row">
                <div className="day">
                    <p>
                        {day} {month}
                    </p>
                </div>
                <div className="time">
                    <time>{time}</time>
                </div>
            </div>
            <div className="week__row">
                <div className="temperature">
                    <p>Temperature: {temp}</p>
                    <p>Feels like: {feelsLike}</p>
                </div>
                <div className="icon-weather">
                    <p>{weather}</p>
                    <p>
                        <img
                            className="icon-weather__forecast"
                            src={img}
                            alt=""
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForecastItem;
