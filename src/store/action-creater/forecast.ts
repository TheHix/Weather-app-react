import axios from "axios";
import { Dispatch } from "redux"
import { ForecastAction, ForecastActionTypes } from "../../types/forecast";

const URL = {
    CURRENT: 'https://api.openweathermap.org/data/2.5/weather',
    TIME_INTERVALS: 'https://api.openweathermap.org/data/2.5/forecast',
    API_KEY: '6788f347ae49d474bc7fb1bd986d7c01',
};
export const fetchForecasts = (city:string = "Moscow") => {
    return async (dispatch: Dispatch<ForecastAction>) => {
        try {
            dispatch({type: ForecastActionTypes.FETCH_FORECASTS})
            const response = await axios.get(`${URL.TIME_INTERVALS}?q=${city}&appid=${URL.API_KEY}`);
            dispatch({type: ForecastActionTypes.FETCH_FORECASTS_SUCCESS, payload: response.data.list});
        } catch (error) {
            dispatch({type: ForecastActionTypes.FETCH_FORECASTS_ERROR, payload: "Произошла ошибка, невозможно получить о прогнозе на неделю :("})
        }
    }
}