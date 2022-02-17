import React from "react";
import Nav from "./nav";
import Timer from "./timer";
import Card from "./card";
import { useState } from "react";

const  CreateWorkout = () => {

    const [exercises, setExercise] = useState([]); 

    const handleInput = () => {
        console.log("button clicked"); 
        const num = document.querySelector('.body-grid').children.length;
        const title = document.querySelector('#title').value;
        const sets = document.querySelector('#sets').value;
        const reps = document.querySelector('#reps').value;
        const info = document.querySelector('#additional-info').value;

        setExercise([...exercises, 
            {
                exercise: title,
                sets,
                reps,
                text: info
            }
        ]); 

        document.querySelector('#title').value = '';
        document.querySelector('#sets').value = '';
        document.querySelector('#reps').value = '';
        document.querySelector('#additional-info').value = '';
    }
    
    return(
        <div className="grid">
            <Nav />
            <div className="body-container">
                <h1>Create Workout</h1>

                <div className="body-grid">
                        {exercises.map((x, index) => <Card key={index} title={x.exercise} sets={x.sets} reps={x.reps} text={x.text} />)}
                    </div>

                    <div className="grid-1-1">
                        <Timer />


                        <div className="modal"> 
                            <h3>Add exercise</h3>
                            <label htmlFor="title">
                                Exercise title
                                <input type="text" id="title"/>
                            </label>
                            <label htmlFor="sets">
                                Exercise sets
                                <input type="number" id="sets"/>
                            </label>
                            <label htmlFor="reps">
                                Exercise reps
                                <input type="number" id="reps"/>
                            </label>
                            <label htmlFor="additional-info">
                                Additional info
                                <textarea name="additional-info" id="additional-info" cols="15" rows="3"></textarea>
                            </label>
                            <button type="button" onClick={handleInput}>Add</button>

                        </div>
                    </div>
            </div>



        </div>
    )

}

export default CreateWorkout;