export enum favoriteCitiesActionTypes {
    SET_FAVORITE_CITIES = "SET_FAVORITE_CITIES",
    DEL_FAVORITE_CITY = "DEL_FAVORITE_CITY",
    ADD_FAVORITE_CITY = "ADD_FAVORITE_CITY",
}
export interface IfavoriteCity {
    id: number;
    city: string;
}
interface setFavoriteCitiesAction {
    type: favoriteCitiesActionTypes.SET_FAVORITE_CITIES;
    payload: any[];
}
interface addFavoriteCityAction {
    type: favoriteCitiesActionTypes.ADD_FAVORITE_CITY;
    payload: any[];
}
interface delFavoriteCityAction {
    type: favoriteCitiesActionTypes.DEL_FAVORITE_CITY;
    payload: number;
}
export type FavoriteCitiesAction =
    | setFavoriteCitiesAction
    | addFavoriteCityAction
    | delFavoriteCityAction;