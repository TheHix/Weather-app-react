import React from "react";
import FavoriteList from "./FavoriteList";

const RightScreen: React.FC = () => {
    return (
        <div className="right-info info-block">
            <div className="right-info__locations">
                <div className="locations__name">Added Locations:</div>
                <FavoriteList />
            </div>
        </div>
    );
};

export default RightScreen;
