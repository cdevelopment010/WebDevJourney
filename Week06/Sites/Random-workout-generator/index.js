
let exerciseCompound = [
    "Squat", 
    "Deadlift", 
    "Bench Press",
    "Overhead Press",
    "Pull-up"
]; 

let exerciseIsolation = [
    "Bulgarian split squat",
    "Romanian deadlift",
    "Lunge", 
    "Glute Bridge", 
    "Standing Calf Raise", 
    "Lat Pull Down", 
    "Bent Over Row", 
    "Good Mornings", 
    "Superman", 
    "Dumbbell Shrugs", 
    "Dumbbell Chest Fly", 
    "Press Up", 
    "Arnold Press", 
    "Lat Raises", 
    "Upright Row", 
    "Bicep Curl", 
    "Hammer Curl", 
    "Tricep Dips", 
    "Skull Crushers", 
    "Tricep Kickbacks", 
    "Sit Ups", 
    "V-Sits", 
    "Bicycle Kicks", 
    "Russian Twists", 
    "Commandos",

    // timed exercises
    "Plank", 
    "Side Plank", 
    "Wall Sit"
]; 

let exerciseIsolationTimed = [
    "Plank", 
    "Side Plank", 
    "Wall Sit"
];

let exerciseHiit = [
    "Bulgarian split squat",
    "Lunge", 
    "Glute Bridge", 
    "Standing Calf Raise", 
    "Good Mornings", 
    "Superman", 
    "Press Up", 
    "Tricep Dips", 
    "Sit Ups", 
    "V-Sits", 
    "Bicycle Kicks", 
    "Russian Twists", 
    "Commandos",
    "Plank", 
    "Side Plank", 
    "Wall Sit", 
    "Squat", 
    "Jumping Jacks", 
    "High Knees",
    "Jog", 
    "Sprint", 
    "Mountain Climbers", 
    "Shadow Boxing", 
    "Burpees", 
    "Tuck Jumps", 
    "Squat Jumps"

]; 

let rm = {
    1: "100%",
    2: "97%",
    3: "94%",
    4: "92%",
    5: "89%",
    6: "86%",
    7: "83%",
    8: "81%",
    9: "78%",
    10: "75%",
    11: "73%",
    12: "71%",
    13: "70%",
    14: "68%",
    15: "67%",
    16: "65%",
    17: "64%",
    18: "63%",
    19: "61%",
    20: "60%",
    21: "59%",
    22: "58%",
    23: "57%",
    24: "56%",
    25: "55%",
    26: "54%",
    27: "53%",
    28: "52%",
    29: "51%",
    30: "50%" 
    
}


let weightLiftingWorkout = document.getElementById("selectWeightLifting"); 
let hiitWorkout = document.getElementById("selectHiit");
let weightLiftingSection = document.getElementById("weightLifting");
let hiitSection = document.getElementById("hiit");
let createWorkoutWeightLifting = document.getElementById("btnWeightLiftingWorkout"); 
let createWorkoutHiit = document.getElementById("btnHiitWorkout"); 





generateExercise(); 

weightLiftingWorkout.addEventListener("click", function() {
    hiitSection.classList.add("hidden"); 
    weightLiftingSection.classList.remove("hidden"); 
});

hiitWorkout.addEventListener("click", function() {
    weightLiftingSection.classList.add("hidden"); 
    hiitSection.classList.remove("hidden"); 
});


createWorkoutWeightLifting.addEventListener("click", generateExercise); 
createWorkoutHiit.addEventListener("click", generateHiit); 



let tableExercise = document.getElementById("exerciseTable");

tableExercise.addEventListener("click", function(event) {
    if (event.target.matches("td")) {
        document.getElementById(event.target.id).parentElement.classList.toggle("done");
    }
})

// Functions 


function generateHiit() {
    let exerciseTable = document.getElementById("exerciseTable"); 
    let numberExercises = document.getElementById("numberExercisesHiit").value; 
    let numberRounds = document.getElementById("hiitRounds").value; 
    let workTime = document.getElementById("hiitWork").value; 
    let restTime = document.getElementById("hiitRest").value; 
    let exerciseList = []; 
    // let innerHTMLString = `<h2>Number of rounds to complete: ${numberRounds}</h2>
    //                         <div class="containerMain">
    //                             <div class="container containerHiit">
    //                                 <div class="fw-bold">Exercise</div>
    //                                 <div class="fw-bold">Reps</div>
    //                                 <div class="fw-bold">Rest</div>
    //                             </div>
    //                         `;

    let innerHTMLString = `<h2>Number of rounds to complete: ${numberRounds}</h2>
                            <table>
                                <thead class="fw-bold">
                                    <tr>
                                        <td id="tableHeader">Exercise</td>
                                        <td id="tableHeader">Reps</td>
                                        <td id="tableHeader">Rest</td>
                                    </tr>
                                </thead>
                            `;

    // Use placeholder values for work/rest time if blank
    if (workTime == "" || workTime == "null" || workTime == "undefined") { 
        workTime = document.getElementById("hiitWork").getAttribute("placeholder");  
    }
    if (restTime == "" || restTime == "null" || restTime == "undefined") { 
        restTime = document.getElementById("hiitRest").getAttribute("placeholder"); 
    } 

    for (let i = 0; i < numberExercises; i++){
        let exerciseType = "HIIT";
        // Get exercise
        exerciseList =  exerciseFunc(exerciseList,exerciseType); 
        exercise=exerciseList[i];

        // innerHTMLString += `<div id="id-${i}" class="container containerHiit">
        //                         <div id = "class-${i}">${exerciseList[i]}</div>
        //                         <div id = "class-${i}">${workTime + " seconds"}</div>
        //                         <div id = "class-${i}">${restTime + " seconds"}</div>
        //                     </div>
        //                     `;

        innerHTMLString += `<tr id="id-${i}">
                                <td id = "class-${i}">${exerciseList[i]}</td>
                                <td id = "class-${i}">${workTime + " seconds"}</td>
                                <td id = "class-${i}">${restTime + " seconds"}</td>
                            </tr>
                            `;

    }

    // innerHTMLString += "</div>"; 
    innerHTMLString += "</table>"; 
    exerciseTable.innerHTML = innerHTMLString; 


    

}


function generateExercise() {
    let exerciseTable = document.getElementById("exerciseTable"); 
    let numberExercises = document.getElementById("numberExercises").value; 
    let exerciseList = []; 
    
    // let innerHTMLString = `<div class="containerMain">
    //                             <div class="container">
    //                             <div class="fw-bold">Exercise</div>
    //                             <div class="fw-bold">Weight (%1rm)</div>
    //                             <div class="fw-bold">Reps</div>
    //                             <div class="fw-bold">Sets</div>
    //                             <div class="fw-bold">Rest</div>
    //                             </div>
    //     `;

    let innerHTMLString = `<table>
                                <thead class="fw-bold">
                                    <tr>
                                        <td id="tableHeader">Exercise</td>
                                        <td id="tableHeader">Weight (%1rm)</td>
                                        <td id="tableHeader">Reps</td>
                                        <td id="tableHeader">Sets</td>
                                        <td id="tableHeader">Rest</td>
                                    </tr>
                                </thead>
        `;


    for (let i = 0; i < numberExercises; i++) {

        let rep; 
        let set; 
        let rest; 
        let maxWeight;
        let exerciseType;
        let exercise; 

        // compound or isolation 
        if (i % 5 == 0) {
            exerciseType = "Compound";
        } else {
            exerciseType = "Isolation"
        }

        // Get exercise
        exerciseList =  exerciseFunc(exerciseList,exerciseType); 
        exercise=exerciseList[i];

        // Set Reps for each exercise
        rep = repRange(exerciseType,exercise); 

        // Number of sets per exercise
        set = setRange(exerciseType); 

        
        // rest per exercise
        rest = restRange(exerciseType); 

        //Maximum weight per exercise

        if (String(rep).includes("Seconds") ) {
            maxWeight="-"; 
        } else {
            maxWeight = rm[rep]; 
        }

        // innerHTMLString += `
        //                         <div id="id-${i}" class="container">
        //                             <div id = "class-${i}">${exerciseList[i]}</div>
        //                             <div id = "class-${i}">${maxWeight}</div>
        //                             <div id = "class-${i}">${rep}</div>
        //                             <div id = "class-${i}">${set}</div>
        //                             <div id = "class-${i}">${rest}</div>
        //                         </div>                                   
        //                         `;


        innerHTMLString += `
                                <tr id="id-${i}">
                                    <td id = "class-${i}">${exerciseList[i]}</td>
                                    <td id = "class-${i}">${maxWeight}</td>
                                    <td id = "class-${i}">${rep}</td>
                                    <td id = "class-${i}">${set}</td>
                                    <td id = "class-${i}">${rest}</td>
                                </tr>                                   
                                `;
    }
    
    // innerHTMLString += "</div>";
    innerHTMLString += "</table>";
    exerciseTable.innerHTML = innerHTMLString; 

}



function repRange(exerciseType, timed) {

    let workoutType = document.getElementById("workoutType").value; 
    let hiitReps = [20, 25, 30, 40, 60]; 
    let rep;

    if (exerciseType == "Compound") {
        if (workoutType == "Strength") { 
            rep = Math.floor(Math.random() * (5 - 0) + 1);
        } else if (workoutType == "Hypertrophy") { 
            rep = Math.floor(Math.random() * (12 - 5) + 6);
        } else if (workoutType == "Endurance") { 
            rep = Math.floor(Math.random() * (20 - 12) + 13);
        } 
    } else if (exerciseIsolationTimed.indexOf(timed) != -1) {
        rep =  hiitReps[Math.floor(Math.random() * hiitReps.length)] + " Seconds";
    } else {
        rep = Math.floor(Math.random() * (20 - 7) + 7);
    }
     

    return rep; 
}

function exerciseFunc(arr,type) {
    let exerciseAlreadyUsed = arr;
    let exercise;

    if (type == "Compound") { 
        exercise = exerciseCompound[Math.floor(Math.random() * exerciseCompound.length)]; 
    } else if (type == "HIIT") {
        exercise = exerciseHiit[Math.floor(Math.random() * exerciseHiit.length)];

    } else  {
        exercise = exerciseIsolation[Math.floor(Math.random() * exerciseIsolation.length)]; 
    }

    if (exerciseAlreadyUsed.indexOf(exercise) == -1) { 
        exerciseAlreadyUsed.push(exercise); 
    } else {
        exerciseFunc(exerciseAlreadyUsed); 
    }

    return exerciseAlreadyUsed; 
}


function setRange(exerciseType) {

    let workoutType = document.getElementById("workoutType").value; 

    let set;

    
    if (exerciseType == "Compound") {
        if (workoutType == "Strength") { 
            set = Math.floor(Math.random() * (6 - 1) + 2);
        } else if (workoutType == "Hypertrophy") { 
            set = Math.floor(Math.random() * (5 - 2) + 3);
        } else if (workoutType == "Endurance") { 
            set = Math.floor(Math.random() * (3 - 1) + 2);
        }  
    } else {
        set = Math.floor(Math.random() * (3 - 1) + 2);
    }

    

    return set; 
}

function restRange(exerciseType) {

    let workoutType = document.getElementById("workoutType").value; 

    let rest;

    
    if (exerciseType == "Compound") {
        if (workoutType == "Strength") { 
            rest = "2 - 3 minutes";
        } else if (workoutType == "Hypertrophy") { 
            rest = "1 - 3 minutes";
        } else {
            rest = "30 - 90 seconds";
        }
    } else {
        rest = "30 - 90 seconds";
    }

    

    return rest; 

}



