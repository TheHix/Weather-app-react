import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../Loader";
import ForecastList from "./ForecastList";

const TabForecast: React.FC = () => {
    const { error, loading } = useTypedSelector(state => state.forecast);
    const currentWether = useTypedSelector(
        store => store.currentWeather.currentWether
    );
    if (error) {
        return <div className="left-info__screen error">{error}</div>;
    }
    if (loading) {
        return <Loader />;
    }

    return (
        <div className="left-info__screen forecast">
            <div className="forecast__wrapper">
                <div className="forecast__city-name city-name">
                    {currentWether!.name}
                </div>
                <ForecastList />
            </div>
        </div>
    );
};

export default TabForecast;
