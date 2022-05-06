import React, { useEffect } from "react";
import { useAction } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import heart from "../../../img/heart.svg";
import { storage } from "../../../tools/localStorage";
import { getTempInCelsius } from "../../../tools/transform";
import Loader from "../../Loader";
const TabNow: React.FC = () => {
    const { currentWether, error, loading } = useTypedSelector(
        store => store.currentWeather
    );
    const { addFavoriteCity, delFavoriteCity } = useAction();
    const favoriteCities = useTypedSelector(store => store.favoriteCities);
    useEffect(() => {
        if (currentWether !== null) {
            storage.saveCurrentCity(currentWether!.name);
        }
    }, [currentWether]);
    if (error) {
        return <div className="left-info__screen error">{error}</div>;
    }

    if (loading || !currentWether) {
        return <Loader />;
    }

    const isFavoriteCity = Boolean(
        favoriteCities.find((item: any) => {
            return item.id === currentWether!.id;
        })
    );

    const favoriteCitiesHandler = () => {
        if (!isFavoriteCity) {
            addFavoriteCity({
                id: currentWether!.id,
                city: currentWether!.name,
            });
        } else {
            delFavoriteCity(currentWether!.id);
        }
    };

    return (
        <div className="left-info__screen now">
            <img
                className="now__weather-icon"
                src={`https://openweathermap.org/img/wn/${
                    currentWether!.weather[0]["icon"]
                }@4x.png`}
                alt="weather-icon"
            ></img>
            <img
                src={heart}
                onClick={favoriteCitiesHandler}
                className={
                    isFavoriteCity
                        ? "now__icon-heart icon-btn active"
                        : "now__icon-heart icon-btn"
                }
                alt="heart"
            />
            <div className="now__temperature">
                {getTempInCelsius(currentWether!.main.temp)}°
            </div>
            <div className="now__city-name city-name">
                {currentWether!.name}
            </div>
        </div>
    );
};

export default TabNow;
