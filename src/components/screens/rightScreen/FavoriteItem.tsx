import React from "react";

const FavoriteItem:React.FC = () => {
    return (
        <li className="locations__item locations-item">
            {"cityName"}
            <button className="locations-item__btn">&times;</button>
        </li>
    );
};

export default FavoriteItem;
