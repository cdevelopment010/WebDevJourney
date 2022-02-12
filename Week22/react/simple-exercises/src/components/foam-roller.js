import React from "react";
import Nav from "./nav";
import Body from "./body";

const  FoamRoller = () => {

    const time = '30 seconds'
    const foamRollExercises = [
                {
                    exercise: 'quads',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'hamstring',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'IT band',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Hip flexor',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Lower back',
                    sets: '1', 
                    reps: time, 
                    text: ''
                },
                {
                    exercise: 'Upper back',
                    sets: '1', 
                    reps: time, 
                    text: ''
                }
            ] 
        const totalSets = 10; 
    return(
        <div className="grid">
            <Nav />
            <Body exercises={foamRollExercises} title="Foam Roll" totalSets={totalSets}/>
        </div>
    )

}

export default FoamRoller;