import { combineReducers } from "redux";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { favoriteCitiesReducer } from "./favoriteCitiesReducer";
import { forecastReducer } from "./forecastReducer";

export const rootReducer = combineReducers({
    forecast: forecastReducer,
    currentWeather: currentWeatherReducer,
    favoriteCities: favoriteCitiesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
