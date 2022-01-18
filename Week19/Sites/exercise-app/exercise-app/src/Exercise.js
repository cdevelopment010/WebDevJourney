import React from 'react';

const Exercise = ({id, image, name,set, rep, removeExercise}) => {

    if (image === '') {
        image = 'https://raw.githubusercontent.com/cdevelopment010/WebDevJourney/main/Week11/sites/GymSite/assets/barbell.jpg'; 
    }


    return (
        <div className="card">
            <div className="card-background"></div>
            <div className="card-header">
                <img src={image} alt={name} />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p className="sets"><strong>Sets: </strong>{set}</p>
                <p className="reps"><strong>Reps: </strong>{rep}</p> 
                <button className='btn' onClick={() => removeExercise(id)}>Complete</button>   
            </div>
        </div>
    )
}

export default Exercise;

