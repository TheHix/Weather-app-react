import React from "react";
import { useAction } from "../../../hooks/useAction";
import { storage } from "../../../tools/localStorage";
import { IfavoriteCity } from "../../../types/favoriteCities";
interface IFavoriteItemProps {
    item: IfavoriteCity;
}
const FavoriteItem: React.FC<IFavoriteItemProps> = ({ item }) => {
    const { delFavoriteCity, fetchForecasts, fetchCurrentWeather } =
        useAction();
    const handlerDeleteFavoriteCities = () => {
        delFavoriteCity(item.id);
    };
    const handlerShowFavoriteCity = () => {
        if (item.city !== storage.getCurrentCity()) {
            fetchForecasts(item.city);
            fetchCurrentWeather(item.city);
        }
    };

    return (
        <li
            className="locations__item locations-item"
            onClick={handlerShowFavoriteCity}
        >
            {item.city}
            <button
                className="locations-item__btn"
                onClick={handlerDeleteFavoriteCities}
            >
                &times;
            </button>
        </li>
    );
};

export default FavoriteItem;
