import { storage } from "../../tools/localStorage";
import {
    FavoriteCitiesAction,
    favoriteCitiesActionTypes,
} from "../../types/favoriteCities";

export const favoriteCitiesReducer = (
    state: any[] = storage.getFavoriteCities() ?? [],
    action: FavoriteCitiesAction
): any[] => {
    switch (action.type) {
        case favoriteCitiesActionTypes.SET_FAVORITE_CITIES:
            return action.payload;
        case favoriteCitiesActionTypes.ADD_FAVORITE_CITY:
            return [...state, action.payload];
        case favoriteCitiesActionTypes.DEL_FAVORITE_CITY:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};
