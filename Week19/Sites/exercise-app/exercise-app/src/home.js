import React, {useState} from 'react'; 
import Workout from './Workout';

function Home() {

    const [showWorkout, setShowWorkout] = useState(false); 
    const [selectedWorkout, setSelectedWorkout] = useState('weights'); 
    const [numberExercises, setNumberExercises] = useState(0); 
    const [hiitWork, setHiitWork] = useState(0); 
    const [hiitRest, setHiitRest] = useState(0); 
    const [hiitRounds, setHiitRounds] = useState(0); 

    const handleChange= (e) => {
        switch (e.target.name) {
            case "number-exercises": 
                setNumberExercises(e.target.value);
                break;
            case "hiitWork": 
                setHiitWork(e.target.value); 
                break;
            case "hiitRest": 
                setHiitRest(e.target.value); 
                break;
            case "hiitRounds": 
                setHiitRounds(e.target.value); 
                break;
            case "exerciseType":
                setSelectedWorkout(e.target.value); 
                break; 
            default: 
                console.log("error on handleChange");
        }
    }

    // used to display the workout on btn click
    const getWorkoutComponent = () => {
        setShowWorkout(true); 
    }

    // main screen
    if (!showWorkout) {
        return (
            <main className = "flex-col">
                <h1>Select workout</h1>
    
                <form className="flex-col-left">
                    <div>
                        <label>
                            <input type="radio" id="weights" name="exerciseType" value="weights" onChange={handleChange} />
                            Weights
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" id="hiit" name="exerciseType" value="hiit" onChange={handleChange}/>
                            HIIT
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" id="body" name="exerciseType" value="body" onChange={handleChange}/>
                            Body weight
                        </label>
                    </div>
    
    
    
    
    
                    <div>
                        <label className="flex-col-left">
                            Number of exercises
                            <input type="number" id="number-exercises" name="number-exercises" min="1" value={numberExercises} onChange={handleChange}/>
                        </label>
                    </div>
    
                    {selectedWorkout === 'hiit' && 
                        <div className="flex-col-md-left">
                            <div>
                                <label className="flex-col-left">
                                    Work
                                    <input type="number" id="hiitWork" name="hiitWork" min="1" value={hiitWork} onChange={handleChange}/>
                                </label>
                            </div>
                            <div>
                                <label className="flex-col-left">
                                    Rest
                                    <input type="number" id="hiitRest" name="hiitRest" min="1" value={hiitRest} onChange={handleChange}/>
                                </label>
                            </div>
                            <div>
                                <label className="flex-col-left">
                                    Rounds
                                    <input type="number" id="hiitRounds" name="hiitRounds" min="1" value={hiitRounds} onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                    }
    
                    <button className="btn btn-form" type="button" onClick={() => getWorkoutComponent()}>Start workout</button>
    
                </form>
    
            </main>
        )
    }

    // workout screen
    if (showWorkout) {
        return (
            <main className = "flex-col">
                <Workout 
                    selectedWorkout={selectedWorkout} 
                    numberExercises={numberExercises}
                    hiitWork={hiitWork}
                    hiitRest={hiitRest}
                    hiitRounds={hiitRounds}
                />
            </main>
        )
    }

    
}

export default Home;