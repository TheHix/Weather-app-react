import React from "react";
const getTempInCelsius = (degreesInKelvin) => {
    return Math.round(degreesInKelvin - 273);
}
const getCompleteWeatherInformation = (weather) =>{
    let massWeathers = [];

    for (let i = 0; i < weather.length; i++){
        massWeathers.push(weather[i].main);
    }

    return massWeathers.join(', ');
}
const getTimeFromUNIX = (time_in_UNIX_timestamp) => {
    const usualTime = new Date(time_in_UNIX_timestamp * 1000);
    const hours = usualTime.getHours();
    const minutes = `0${usualTime.getMinutes()}`.slice(-2);
    return `${hours}:${minutes}`;
}
const getDay = (item) => {
    if (item.dt_txt.slice(8, 9) === '0') {
        return item.dt_txt.slice(9, 10);
    }

    return item.dt_txt.slice(8, 10);
}
const getMonth = (item) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[+item.dt_txt.slice(6, 7) - 1];
}
const getTime = (item) => {
    return item.dt_txt.slice(11, 16);
}
const ForecastItem: React.FC = ({item}) => {
    const month = getMonth(item);
    const day = getDay(item);
    const time = getTime(item);
    const temp = getTempInCelsius(item.main.temp).toString();
    const feelsLike = getTempInCelsius(item.main.feels_like).toString();
    const weather = item.weather[0].main;
    const img = `https://openweathermap.org/img/wn/${item.weather[0]['icon']}@2x.png`;
    return (
        <div className="week">
            <div className="week__row">
                <div className="day">
                    <p>
                        ${day} ${month}
                    </p>
                </div>
                <div className="time">
                    <time>${time}</time>
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
