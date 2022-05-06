import React, { useState } from "react";
import TabDetalis from "../tabs/tabDetalis/TabDetalis";
import TabForecast from "../tabs/tabForecast/TabForecast";
import TabNow from "../tabs/tabNow/TabNow";
const tabs = {
    now: 1,
    detalis: 2,
    forecast: 3,
};
const LeftScreen:React.FC = () => {
    const [tab, setTab] = useState(tabs.now);
    return (
        <div className="left-info info-block">
            {tab === tabs.now ? (
                <TabNow />
            ) : tab === tabs.detalis ? (
                <TabDetalis />
            ) : (
                <TabForecast />
            )}
            <div className="buttons">
                <button
                    className={tab === tabs.now ? "btn tab active" : "btn tab"}
                    onClick={() => setTab(tabs.now)}
                >
                    Now
                </button>
                <button
                    className={
                        tab === tabs.detalis ? "btn tab active" : "btn tab"
                    }
                    onClick={() => setTab(tabs.detalis)}
                >
                    Detalis
                </button>
                <button
                    className={
                        tab === tabs.forecast ? "btn tab active" : "btn tab"
                    }
                    onClick={() => setTab(tabs.forecast)}
                >
                    Forecast
                </button>
            </div>
        </div>
    );
};

export default LeftScreen;
