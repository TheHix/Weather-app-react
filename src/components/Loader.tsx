import React from "react";

const Loader: React.FC = () => {
    return (
        <div
            style={{
                marginTop: ".5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default Loader;
