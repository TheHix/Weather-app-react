import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../Loader";
import DetalisList from "./DetalisList";

const TabDetalis: React.FC = () => {
    const { currentWether, error, loading } = useTypedSelector(
        store => store.currentWeather
    );
    if (error) {
        return <div className="left-info__screen error">{error}</div>;
    }
    if (loading || !currentWether) {
        return <Loader />;
    }
    return (
        <div className="left-info__screen detalis">
            <div className="detalis__city-name city-name">
                {currentWether!.name}
            </div>
            <DetalisList currentWether={currentWether} />
        </div>
    );
};

export default TabDetalis;
