import {
    ForecastAction,
    ForecastActionTypes,
    ForecastState,
} from "../../types/forecast";

const initialState: ForecastState = {
    forecasts: [],
    loading: false,
    error: null,
};
export const forecastReducer = (
    state = initialState,
    action: ForecastAction
): ForecastState => {
    //TODO: сделать fetch  current weather
    switch (action.type) {
        case ForecastActionTypes.FETCH_FORECASTS:
            return { loading: true, error: null, forecasts: [] };
        case ForecastActionTypes.FETCH_FORECASTS_SUCCESS:
            return { loading: false, error: null, forecasts: action.payload };
        case ForecastActionTypes.FETCH_FORECASTS_ERROR:
            return { loading: false, error: action.payload, forecasts: [] };
        default:
            return state;
    }
};
