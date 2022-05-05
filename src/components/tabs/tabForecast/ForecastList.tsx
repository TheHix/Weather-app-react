import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../Loader";
import ForecastItem from "./ForecastItem";

const ForecastList = () => {
    const { error, loading, forecasts } = useTypedSelector(
        state => state.forecast
    );
    if (loading) {
        return <Loader/>;
    }
    if (error) {
        return <div className="">{error}</div>;
    }
    return (
        <>
            <div className="forecast__city-name city-name">Aktobe</div>
            <div className="forecast__list-weeks">
                {forecasts.map(item => {
                    console.log(item);
                    
                    return <ForecastItem key={item.id} item={item} />;
                })}
            </div>
        </>
    );
};

export default ForecastList;
