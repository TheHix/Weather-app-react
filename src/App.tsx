import React from "react";
import "./App.css";
import LeftScreen from "./components/screens/LeftScreen";
import RightScreen from "./components/screens/RightScreen";
import SearchBar from "./components/SearchBar";
const App = () => {
    return (
        <div className="wrapper">
            <SearchBar/>
            <div className="info">
                <LeftScreen/>
                <RightScreen/>
            </div>
        </div>
    );
};

export default App;
