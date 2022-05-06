import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ForecastItem from "./ForecastItem";

const ForecastList: React.FC = () => {
    const forecasts = useTypedSelector(state => state.forecast.forecasts);
    return (
        <div className="forecast__list-weeks">
            {forecasts.map(item => {
                return <ForecastItem key={item.id} item={item} />;
            })}
        </div>
    );
};

export default ForecastList;
