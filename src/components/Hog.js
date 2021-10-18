import React from "react";

function Hog({name, image, handleHogClick, hog}) {
    return (
        <div className="ui eight wide column" onClick={() => handleHogClick(hog)}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    )
}

export default Hog;