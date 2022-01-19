import React, { useState, useEffect } from "react";
import "./App.css";
import Exercises from "./Exercises";
import Home from "./home";

const url = "https://my-exercise-api-project.herokuapp.com/exercises";

const Workout = ({
  selectedWorkout,
  numberExercises,
  hiitWork,
  hiitRest,
  hiitRounds,
}) => {
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);

  const [reset, setReset] = useState(false);

  // For completed exercises
  const removeExercise = (id) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(newExercises);
  };

  const resetWorkout = () => {
    console.log("reset btn clicked");
    setReset(true);
    console.log(reset);
  };

  const fetchExercises = async (selectedWorkout,numberExercises,hiitWork,hiitRest,hiitRounds) => {
    setLoading(true); 
    try {
    const response = await fetch(url); 
    const exercises = await response.json(); 

    console.log('selectedWorkout',selectedWorkout); 
    console.log('numberExercises',numberExercises); 

    const limitedExercise = exercises.filter(exercise => {
            if(selectedWorkout === 'hiit') {
                return exercise.HIIT;
            } else if (selectedWorkout === 'weights') {
                return exercise.Weights; 
            } 
            return exercise;
        }); 
        

    const shuffedArray = limitedExercise.sort(() => 0.5 - Math.random()); 
    const selectedExercies = shuffedArray.slice(0, numberExercises); 

    //create number of sets and reps per exercise on load
    selectedExercies.forEach((exercise) => {
        if (selectedWorkout === 'hiit') {
            exercise.set = hiitWork + ' seconds'; 
            exercise.rep = hiitRounds + ' rounds'; 
        } else {
            exercise.set = Math.floor(Math.random()*5 + 1);
            exercise.rep = Math.floor(Math.random()*19 + 1);
        }
    })

    setLoading(false); 
    setExercises(selectedExercies); 
    // console.log(exercises); 

    } catch(errors) {
    setLoading(true); 
    console.log(errors); 
    }
}

  useEffect(() => {
    fetchExercises(selectedWorkout,numberExercises,hiitWork,hiitRest,hiitRounds); 
  }, [selectedWorkout,numberExercises,hiitWork,hiitRest,hiitRounds]);

  if (loading) {
    return (
      <main className="flex-col">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (reset) {
    return <Home />;
  }

  if (exercises.length === 0) {
    return (
      <main className="flex-col">
        <h1>Reset Exercises</h1>
        <button className="btn" onClick={() => resetWorkout()}>
          Reset
        </button>
      </main>
    );
  }

  return (
    <main className="grid">
      <section className="left-col position-fixed">
        <button className="btn-start">You've got this!</button>
      </section>
      <section className="right-col">
        <Exercises exercises={exercises} removeExercise={removeExercise} />
      </section>
    </main>
  );
};

export default Workout;
