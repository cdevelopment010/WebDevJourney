import React from "react";
import Card from "./card";
import { useLocation } from "react-router-dom";
import Timer from "./timer";

function Body(props) {
    
    const exercises = [...props.exercises];    
    console.log(exercises); 
    exercises.map((x, index) => {
        console.log(x.exercise);
        console.log(index) 
    })


    if (exercises.length > 0 ) {

        return (
            <div className="body-container">
                <h1>{props.title}</h1>
                <div className="body-grid">
                    {exercises.map((x, index) => <Card key={index} title={x.exercise} sets={x.sets} reps={x.reps} text={x.text} />)}
                </div>
                <Timer />
            </div>
        )
    }
    if (props.title != 'Create Workout') {
        return (
            <div className="body-container">
                <h1>Home</h1>
                <p>Select an exercise from the nav to get started, or just use the timer below!</p>
                <Timer />
            </div>
        )
    }

}

export default Body;