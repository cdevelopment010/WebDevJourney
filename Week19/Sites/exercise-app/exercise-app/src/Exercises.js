import React from 'react';
import Exercise from "./Exercise";

function Exercises({exercises, removeExercise}) {

    return (
        <section>
            <div className="cards">
                {exercises.map((exercise)=> {
                    return <Exercise key={exercise.id} {...exercise} removeExercise={removeExercise}/>
                })}
            </div>
        </section>
    )
}


export default Exercises;