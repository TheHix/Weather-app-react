import { combineReducers } from "redux";
import { forecastReducer } from "./forecastReducer";

export const rootReducer = combineReducers({
    forecast: forecastReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
