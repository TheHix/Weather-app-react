import {
    favoriteCitiesActionTypes,
    IfavoriteCity,
} from "../../types/favoriteCities";

export const setFavoriteCities = (favoriteCities: any[]) => {
    return {
        type: favoriteCitiesActionTypes.SET_FAVORITE_CITIES,
        payload: favoriteCities,
    };
};
export const addFavoriteCity = (favoriteCity: IfavoriteCity) => {
    return {
        type: favoriteCitiesActionTypes.ADD_FAVORITE_CITY,
        payload: favoriteCity,
    };
};
export const delFavoriteCity = (id: number) => {
    return { type: favoriteCitiesActionTypes.DEL_FAVORITE_CITY, payload: id };
};
