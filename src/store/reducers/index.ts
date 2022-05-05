import { combineReducers } from "redux";
import { CurrentWeatherReducer } from "./currentWeatherReducer";
import { forecastReducer } from "./forecastReducer";

export const rootReducer = combineReducers({
    forecast: forecastReducer,
    currentWeather: CurrentWeatherReducer
});
export type RootState = ReturnType<typeof rootReducer>;
