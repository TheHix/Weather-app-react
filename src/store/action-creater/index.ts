import * as ForecastActionCreaters from "./forecast";
import * as CurrentWeatherActionCreaters from "./currentWeather";
import * as FavoriteCitiesActionCreaters from "./favoriteCities";
export default {
    ...ForecastActionCreaters,
    ...CurrentWeatherActionCreaters,
    ...FavoriteCitiesActionCreaters,
};
