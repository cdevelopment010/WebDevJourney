import React from "react";
import Nav from "./nav";
import Body from "./body";

const  KneeStrengthening = () => {

    const time = '30 seconds'
    const kneeExercises = [
                {
                    exercise: 'Short Arc Quad',
                    sets: '3', 
                    reps: '10', 
                    text: 'Use a foam roller or towel to create the arc'
                },
                {
                    exercise: 'Calf Raises',
                    sets: '3', 
                    reps: '10', 
                    text: 'Hold last of each set for 10 seconds'
                },
                {
                    exercise: 'Wall Sit',
                    sets: '2', 
                    reps: '20 seconds', 
                    text: ''
                },
                {
                    exercise: 'Glute Bridge',
                    sets: '2', 
                    reps: '10', 
                    text: ''
                },
                {
                    exercise: 'Lying Hamstring Curls',
                    sets: '3', 
                    reps: '5', 
                    text: 'each side'
                },
                {
                    exercise: 'Straight Leg Lifts',
                    sets: '3', 
                    reps: '10', 
                    text: 'focus on the quad'
                },
                {
                    exercise: 'Fire Hydrant',
                    sets: '3', 
                    reps: '10', 
                    text: 'each side'
                }

            ] 
        const totalSets = 10; 
    return(
        <div className="grid">
            <Nav />
            <Body exercises={kneeExercises} title="Knee Strengthening" totalSets={totalSets}/>
        </div>
    )

}

export default KneeStrengthening;