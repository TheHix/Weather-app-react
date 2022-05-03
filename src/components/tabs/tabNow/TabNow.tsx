import React from "react";
import heart from "../../../img/heart.svg";
const TabNow = () => {
    return (
        <div className="left-info__screen now">
            <img src={heart} className="now__icon-heart icon-btn" alt="heart" />
            <div className="now__temperature"></div>
            <div className="now__city-name city-name"></div>
        </div>
    );
};

export default TabNow;
