import {
    CurrentWeatherAction,
    CurrentWetherActionTypes,
    CurrentWeatherState,
} from "../../types/currentWeather";

const initialState: CurrentWeatherState = {
    currentWether: null,
    loading: false,
    error: null,
};
export const forecastReducer = (
    state = initialState,
    action: CurrentWeatherAction
): CurrentWeatherState => {
    switch (action.type) {
        case CurrentWetherActionTypes.FETCH_CURRENT_WEATHER:
            return { loading: true, error: null, currentWether: null };
        case CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                loading: false,
                error: null,
                currentWether: action.payload,
            };
        case CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_ERROR:
            return {
                loading: false,
                error: action.payload,
                currentWether: null,
            };
        default:
            return state;
    }
};
