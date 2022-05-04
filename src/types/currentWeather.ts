export enum CurrentWetherActionTypes {
    FETCH_CURRENT_WEATHER = "FETCH_CURRENT_WEATHER",
    FETCH_CURRENT_WEATHER_SUCCESS = "FETCH_CURRENT_WEATHER_SUCCESS",
    FETCH_CURRENT_WEATHER_ERROR = "FETCH_CURRENT_WEATHER_ERROR",
}
interface FetchCurrentWeatherAction {
    type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER;
}
interface FetchCurrentWeatherSuccessAction {
    type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS;
    payload: ICurrentWether;
}
interface FetchCurrentWeatherErrorAction {
    type: CurrentWetherActionTypes.FETCH_CURRENT_WEATHER_ERROR;
    payload: string;
}
export type CurrentWeatherAction =
    | FetchCurrentWeatherAction
    | FetchCurrentWeatherSuccessAction
    | FetchCurrentWeatherErrorAction;
interface IMain {
    feels_like: number;
    temp: number;
}
interface Isys {
    sunrise: number;
    sunset: number;
}
interface ICurrentWether {
    weather: any[];
    main: IMain;
    name: string;
    sys: Isys;
}
export interface CurrentWeatherState {
    currentWether: ICurrentWether | null;
    loading: boolean;
    error: string | null;
}
