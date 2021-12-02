let date = document.getElementById("date"); 
let activity = document.getElementById("classes"); 
let btn = document.getElementById("classBtn"); 
let today = new Date();
let nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
let selectedDate; 
let mainElement = document.getElementById("classes-main"); 


// Set date for classes

date.value = today.toISOString().split('T')[0];
date.setAttribute("max", nextWeek.toISOString().split('T')[0]); 
date.setAttribute("min", today.toISOString().split('T')[0]); 


// Activity times in half an hour increments

let time = []; 
let increment = 30; 
let startTime = 60*6; 
let endTime = 0; 

btn.addEventListener("click", compileActivities); 

// 
// Functions
// 

// Get day of date selected
function dateSelect() {
    selectedDate = new Date(date.value).getDay(); 
    if (selectedDate == 6) {
        endTime = 60*18;
    } else if (selectedDate == 0) {
        endTime = 60*17;
    } else {
        endTime = 60*22; 
    }

    // Loop to create an array of times 
    for (let i = 0; startTime <= endTime; i++) {
        let hh = Math.floor(startTime/60); // getting hours of day in 0-24 format
        let mm = (startTime%60); // getting minutes of the hour in 0-55 format
        time[i] = ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2); 
        startTime += increment; 
    } 
}


function randomActivities() {
    let activityTable = document.getElementById("activityTable"); 
    let numActivitiesAvailable = Math.floor(Math.random()*10); 
    if (numActivitiesAvailable == 0 ){
        mainElement.insertAdjacentHTML("beforeend", "<h3 id='noClass' class='noClass'>Sorry, no classes available</h3>")
    }
    for (let i = 0; i<numActivitiesAvailable; i++){
        let rand = Math.floor(Math.random()*time.length); 
        console.log(i);
        let row = `<tr><td>${activity.options[activity.selectedIndex].text}</td><td>${time[rand]}</td><td><a href="#">Book</a></td></tr>`; 
        activityTable.insertAdjacentHTML("beforeend", row); 
    }
}

function resetTable() {
    
    try {
        let activityTable = document.getElementById("activityTable"); 
        activityTable.remove(); 
    } catch(e) {
        console.log(e); 
    }
    try {
        let noClases = document.getElementById("noClass"); 
        noClases.remove(); 
    } catch(e) {
        console.log(e); 
    }


    let tableHTML = `<table id="activityTable">
                    <tr>
                        <th>Activity</th>
                        <th>Time</th>
                        <th>Book</th>
                    </tr>
                </table>`;
    mainElement.insertAdjacentHTML("beforeend", tableHTML); 
}


function compileActivities() {
    dateSelect(); 
    resetTable(); 
    randomActivities();
}


compileActivities(); 