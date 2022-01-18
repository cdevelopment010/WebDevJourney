import React, {useState, useEffect} from 'react';
import './App.css';
import Exercises from './Exercises'; 


const url = 'https://my-exercise-api-project.herokuapp.com/exercises'; 
function App() {

  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]); 

  const fetchExercises = async () => {
    setLoading(true); 
    try {
      const response = await fetch(url); 
      const exercises = await response.json(); 


      //create number of sets and reps per exercise on load
      exercises.forEach((exercise) => {
        exercise.set = Math.floor(Math.random()*5 + 1);
        exercise.rep = Math.floor(Math.random()*19 + 1);
      })

      setLoading(false); 
      setExercises(exercises); 
      // console.log(exercises); 

    } catch(errors) {
      setLoading(true); 
      console.log(errors); 
    }
  }

  // For completed exercises
  const removeExercise = (id) => {
    const newExercises = exercises.filter((exercise) => exercise.id !== id);
    setExercises(newExercises); 
  }


  useEffect( ()=> {
    fetchExercises(); 

  }, [])


  if(loading) {
    return (
      <main className="flex-col">
        <h1>Loading...</h1>
      </main>
    )
  }

  if (exercises.length === 0 ){
    return (
      <main className="flex-col">
        <h1>Reset Exercises</h1>
        <button className="btn" onClick={()=> fetchExercises()}>Reset</button>
      </main>
    )
  }

  return (
    <main className="grid">
      <section className="left-col position-fixed">
        <button className="btn-start">You've got this!</button>
      </section>
      <section className="right-col">
        <Exercises exercises={exercises} removeExercise={removeExercise}/>
      </section>
    </main>
  );
}

export default App;
