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
export interface ForecastState {
    forecasts: any[];
    loading: boolean;
    error: string | null;
}
export type ForecastAction =
    | FetchForecastsAction
    | FetchForecastsSuccessAction
    | FetchForecastsErrorAction;