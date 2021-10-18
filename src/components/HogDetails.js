import React from "react";

function HogDetails({hogToDisplay}) {
    console.log(hogToDisplay);
    return (
        <>
            <h2>Hog Details</h2>
            <p>Specialty: {hogToDisplay.specialty}</p>
            <p>Weight: {hogToDisplay.weight}</p>
            <p>Greased: {hogToDisplay.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hogToDisplay["highest medal achieved"]}</p>
        </>
    )
}

export default HogDetails;