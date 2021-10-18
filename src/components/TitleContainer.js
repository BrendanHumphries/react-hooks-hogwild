import React from "react";

import Hog from "./Hog";

function TitleContainer({hogs, handleHogClick}) {
    return (
        <div className="ui grid container">
            {hogs.map(hog => {
                return (
                    <Hog
                        key={hog.name}
                        name={hog.name}
                        image={hog.image}
                        handleHogClick={handleHogClick}
                        hog={hog}
                    />
                )
            })}    
        </div>
    )
}

export default TitleContainer;