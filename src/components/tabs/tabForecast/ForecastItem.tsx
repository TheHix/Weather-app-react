import React from "react";
const getTempInCelsius = (degreesInKelvin: number) => {
    return Math.round(degreesInKelvin - 273);
};
// const getCompleteWeatherInformation = (weather:any) =>{
//     let massWeathers = [];

//     for (let i = 0; i < weather.length; i++){
//         massWeathers.push(weather[i].main);
//     }

//     return massWeathers.join(', ');
// }
// const getTimeFromUNIX = (time_in_UNIX_timestamp:any) => {
//     const usualTime = new Date(time_in_UNIX_timestamp * 1000);
//     const hours = usualTime.getHours();
//     const minutes = `0${usualTime.getMinutes()}`.slice(-2);
//     return `${hours}:${minutes}`;
// }
const getDay = (dt_txt:string) => {
    if (dt_txt.slice(8, 9) === "0") {
        return dt_txt.slice(9, 10);
    }

    return dt_txt.slice(8, 10);
};
const getMonth = (dt_txt:string) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months[+dt_txt.slice(6, 7) - 1];
};
const getTime = (dt_txt: string) => {
    return dt_txt.slice(11, 16);
};
interface IMain {
    temp: number;
    feels_like:number;
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
    const {dt_txt, weather: cuurentWeather, main} = item;
    const month = getMonth(dt_txt);
    const day = getDay(dt_txt);
    const time = getTime(dt_txt);
    const temp = getTempInCelsius(main.temp).toString();
    const feelsLike = getTempInCelsius(main.feels_like).toString();
    const weather = cuurentWeather[0].main;
    const img = `https://openweathermap.org/img/wn/${cuurentWeather[0]["icon"]}@2x.png`;
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
