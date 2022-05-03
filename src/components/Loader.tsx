import React from "react";

const Loader: React.FC = () => {
    return (
        <div
            style={{
                marginTop:"7rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default Loader;
