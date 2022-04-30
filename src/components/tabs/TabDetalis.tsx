import React from "react";

const TabDetalis = () => {
    return (
        <div className="left-info__screen detalis">
            <div className="detalis__city-name city-name"></div>
            <ul className="detalis__list">
                <li className="detalis__item detalis__item-temp"></li>
                <li className="detalis__item detalis__item-like"></li>
                <li className="detalis__item detalis__item-weather"></li>
                <li className="detalis__item detalis__item-sunrise"></li>
                <li className="detalis__item detalis__item-sunset"></li>
            </ul>
        </div>
    );
};

export default TabDetalis;
