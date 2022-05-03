import React, { useEffect } from "react";
import { useAction } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ForecastList from "./ForecastList";

const TabForecast: React.FC = () => {
    return (
        <div className="left-info__screen forecast">
            <div className="forecast__wrapper">
                <div className="forecast__city-name city-name">Aktobe</div>
                <ForecastList />
            </div>
        </div>
    );
};

export default TabForecast;
