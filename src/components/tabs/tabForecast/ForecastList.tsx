import React from 'react';
import { useAction } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ForecastItem from './ForecastItem';

const ForecastList = () => {
    const {fetchForecasts} = useAction();
    const {error, loading, forecasts} = useTypedSelector(
        state => state.forecast
    );
    return (
        <div className="forecast__list-weeks">
            {
                forecasts.map((item) => {
                    return <ForecastItem item = {item}/>
                })
            }
        </div>
    );
};

export default ForecastList;