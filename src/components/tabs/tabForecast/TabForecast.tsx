import React from "react";
import ForecastList from "./ForecastList";



const TabForecast = () => {
    return (
        <div className="left-info__screen forecast">
            <div className="forecast__wrapper">
                <div className="forecast__city-name city-name">Aktobe</div>
                <ForecastList/>
            </div>
        </div>
    );
};

export default TabForecast;
