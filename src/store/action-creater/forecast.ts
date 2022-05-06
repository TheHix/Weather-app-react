import axios from "axios";
import { Dispatch } from "redux";
import { ForecastAction, ForecastActionTypes } from "../../types/forecast";
import { URL } from "./view";

export const fetchForecasts = (city: string = "Moscow") => {
    return async (dispatch: Dispatch<ForecastAction>) => {
        try {
            dispatch({ type: ForecastActionTypes.FETCH_FORECASTS });
            const response = await axios.get(
                `${URL.TIME_INTERVALS}?q=${city}&appid=${URL.API_KEY}`
            );
            dispatch({
                type: ForecastActionTypes.FETCH_FORECASTS_SUCCESS,
                payload: response.data.list,
            });
        } catch (error: any) {
            if (error.response.data.message === "city not found") {
                dispatch({
                    type: ForecastActionTypes.FETCH_FORECASTS_ERROR,
                    payload: "Такого города не существует",
                });
            } else {
                dispatch({
                    type: ForecastActionTypes.FETCH_FORECASTS_ERROR,
                    payload: "Не удалось вывести прогноз :(",
                });
            }
        }
    };
};
