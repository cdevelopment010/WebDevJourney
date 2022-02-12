import React from "react";

const Card = ( {title, sets, reps, text }) => {



    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Sets: {sets}</p>
            <p>Reps: {reps}</p>
            <p>Additional info: {text}</p>
        </div>  
    )
}

export default Card