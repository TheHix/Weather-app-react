import React, { useEffect } from "react";
import "./App.css";
import LeftScreen from "./components/screens/LeftScreen";
import RightScreen from "./components/screens/rightScreen/RightScreen";
import SearchBar from "./components/SearchBar";
import { useAction } from "./hooks/useAction";
import { storage } from "./tools/localStorage";
const App = () => {
    const { fetchCurrentWeather, fetchForecasts } = useAction();
    useEffect(() => {
        fetchCurrentWeather(storage.getCurrentCity() ?? "Moscow");
        fetchForecasts();
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
