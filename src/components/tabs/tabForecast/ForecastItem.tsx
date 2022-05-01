import React from "react";

const ForecastItem = () => {
    return (
        <div className="week">
            <div className="week__row">
                <div className="day">
                    <p>
                        ${} ${}
                    </p>
                </div>
                <div className="time">
                    <time>${}</time>
                </div>
            </div>
            <div className="week__row">
                <div className="temperature">
                    <p>Temperature: {}</p>
                    <p>Feels like: {}</p>
                </div>
                <div className="icon-weather">
                    <p>{}</p>
                    <p>
                        <img
                            className="icon-weather__forecast"
                            src=""
                            alt=""
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForecastItem;
