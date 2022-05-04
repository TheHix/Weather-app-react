import React from "react";
import ForecastList from "./ForecastList";

const TabForecast: React.FC = () => { 
    return (
        <div className="left-info__screen forecast">
            <div className="forecast__wrapper">
                
                <ForecastList />
            </div>
        </div>
    );
};

export default TabForecast;
