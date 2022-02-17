import React from "react";
import Nav from "./nav";
import Body from "./body";

const  Stretches = () => {

    const time = '30 seconds'
    const stretchExercises = [
                {
                    exercise: 'Standing Hamstring',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Hip Flexor',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Quads',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Shoulder with Back Twist',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Cobra',
                    sets: '1', 
                    reps: time, 
                    text: ''
                },
                {
                    exercise: 'Pigeon',
                    sets: '1', 
                    reps: time, 
                    text: 'each side'
                },
                {
                    exercise: 'Child Pose',
                    sets: '1', 
                    reps: time, 
                    text: ''
                },{
                    exercise: 'Seated Groin Stretch',
                    sets: '1', 
                    reps: time, 
                    text: ''
                },
                

            ] 
        const totalSets = 10; 
    return(
        <div className="grid">
            <Nav />
            <Body exercises={stretchExercises} title="Stretches" totalSets={totalSets}/>
        </div>
    )

}

export default Stretches;