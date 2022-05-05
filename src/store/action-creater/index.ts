import * as ForecastActionCreaters from "./forecast";
import * as CurrentWeatherActionCreaters from "./currentWeather";

export default {
    ...ForecastActionCreaters,
    ...CurrentWeatherActionCreaters
}