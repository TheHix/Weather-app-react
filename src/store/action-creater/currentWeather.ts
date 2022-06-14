import axios from "axios";
import { Dispatch } from "redux";
import {
    CurrentWeatherAction,
    CurrentWetherActionTypes,
} from "../../types/currentWeather";
import { URL } from "./view";

export const fetchCurrentWeather = (city: string = "Moscow") => {
    return async (dispatch: Dispatch<CurrentWeatherAction>) => {
        try {
            dispatch({ type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER });
            const response = await axios.get(
                `${URL.CURRENT}?q=${city}&appid=${URL.API_KEY}`
            );
            
            dispatch({
                type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
                payload: response.data,
            });
        } catch (error: any) {
            if (error.response.data.message === "city not found") {
                dispatch({
                    type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_ERROR,
                    payload: "Такого города не существует",
                });
            } else {
                dispatch({
                    type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_ERROR,
                    payload: "Не удалось вывести прогноз :(",
                });
            }
        }
    };
};
