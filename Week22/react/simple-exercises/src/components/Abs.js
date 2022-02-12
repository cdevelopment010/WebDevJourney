import React from "react";
import Nav from "./nav";
import Body from "./body";

const  Abs = () => {

    const time = '30 seconds'
    const abExercises = [
                {
                    exercise: 'Plank',
                    sets: '2', 
                    reps: time, 
                    text: ''
                },
                {
                    exercise: 'Toe Touches',
                    sets: '2', 
                    reps: '10', 
                    text: 'each side'
                },
                {
                    exercise: 'Knee Ins',
                    sets: '2', 
                    reps: '10', 
                    text: ''
                },
                {
                    exercise: 'Heel Touches',
                    sets: '2', 
                    reps: '10', 
                    text: 'each side'
                },
                {
                    exercise: 'Scissor Kicks',
                    sets: '2', 
                    reps: '10', 
                    text: 'each side'
                }
            ] 
        const totalSets = 10; 
    return(
        <div className="grid">
            <Nav />
            <Body exercises={abExercises} title="Abs" totalSets={totalSets}/>
        </div>
    )

}

export default Abs;