export enum ForecastActionTypes {
    FETCH_FORECASTS = "FETCH_FORECASTS",
    FETCH_FORECASTS_SUCCESS = "FETCH_FORECASTS_SUCCESS",
    FETCH_FORECASTS_ERROR = "FETCH_FORECASTS_ERROR",
}
interface FetchForecastsAction {
    type: ForecastActionTypes.FETCH_FORECASTS;
}
interface FetchForecastsSuccessAction {
    type: ForecastActionTypes.FETCH_FORECASTS_SUCCESS;
    payload: any[];
}
interface FetchForecastsErrorAction {
    type: ForecastActionTypes.FETCH_FORECASTS_ERROR;
    payload: string;
}
interface ForecastState {
    forecasts: any[];
    loading: boolean;
    error: string | null;
}
const initialState: ForecastState = {
    forecasts: [],
    loading: false,
    error: null,
};
export type ForecastAction =
    | FetchForecastsAction
    | FetchForecastsSuccessAction
    | FetchForecastsErrorAction;
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
