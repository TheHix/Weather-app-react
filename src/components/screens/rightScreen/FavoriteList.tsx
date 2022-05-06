import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { storage } from "../../../tools/localStorage";
import { IfavoriteCity } from "../../../types/favoriteCities";
import FavoriteItem from "./FavoriteItem";

const FavoriteList: React.FC = () => {
    const favoriteCities = useTypedSelector(store => store.favoriteCities);
    useEffect(() => {
        storage.saveFavoriteCities(favoriteCities);
    }, [favoriteCities]);
    return (
        <ul className="locations__list">
            {favoriteCities.map((item: IfavoriteCity) => {
                return <FavoriteItem key={item.id} item={item} />;
            })}
        </ul>
    );
};

export default FavoriteList;
