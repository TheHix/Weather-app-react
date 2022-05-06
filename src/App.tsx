import React, { useEffect } from "react";
import "./App.css";
import LeftScreen from "./components/screens/LeftScreen";
import RightScreen from "./components/screens/rightScreen/RightScreen";
import SearchBar from "./components/SearchBar";
import { useAction } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";
const App = () => {
    const { fetchCurrentWeather, fetchForecasts } = useAction();
    useEffect(() => {
        fetchForecasts();
        fetchCurrentWeather();
    }, []);
    return (
        <div className="wrapper">
            <SearchBar />
            <div className="info">
                <LeftScreen />
                <RightScreen />
            </div>
        </div>
    );
};

export default App;
