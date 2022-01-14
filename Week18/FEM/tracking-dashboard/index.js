let workCard = document.getElementById("work-card"); 
let playCard = document.getElementById("play-card"); 
let studyCard = document.getElementById("study-card"); 
let exerciseCard = document.getElementById("exercise-card"); 
let socialCard = document.getElementById("social-card"); 
let selfCareCard = document.getElementById("self-care-card"); 

let daily = document.getElementById("daily"); 
let weekly = document.getElementById("weekly"); 
let monthly = document.getElementById("monthly"); 

let arr = [workCard, playCard, studyCard, exerciseCard, socialCard, selfCareCard]; 

// load with daily already populating html
let timeframe = 'daily'; 
updateDash(timeframe); 

daily.addEventListener("click", function() {
    updateDash(this.innerText.toLowerCase());
    this.classList.add('text-active'); 
    weekly.classList.remove('text-active'); 
    monthly.classList.remove('text-active'); 
},false);
weekly.addEventListener("click", function() {
    updateDash(this.innerText.toLowerCase());
    daily.classList.remove('text-active'); 
    this.classList.add('text-active'); 
    monthly.classList.remove('text-active'); 
},false);
monthly.addEventListener("click", function() {
    updateDash(this.innerText.toLowerCase());
    daily.classList.remove('text-active'); 
    weekly.classList.remove('text-active'); 
    this.classList.add('text-active'); 
}, false);



// background colours



function updateDash(timeframe) {
    fetch("data.json")
    .then(response => {
        return response.json()
        // JSON.parse(response)
    })
    .then(data => {
        
        for (let i = 0; i < arr.length; i++) {
            arr[i].querySelector('.title').innerHTML = data[i].title; 
            arr[i].querySelector('.current').innerHTML = data[i].timeframes[timeframe].current + 'hrs'; 
            arr[i].querySelector('.previous').innerHTML = `Last Week - ${data[i].timeframes[timeframe].previous}hrs`; 
        }
    })
    .catch(error => console.log(error))
}


// function updateDash() {
//     fetch("data.json")
//     .then(response => {
//         return response.json()
//         // JSON.parse(response)
//     })
//     .then(data => {
        
//         console.log(Boolean(this.innerText.toLowerCase())); 
//         let timeframe = this.innerText.toLowerCase(); 

//         for (let i = 0; i < arr.length; i++) {
//             arr[i].querySelector('.title').innerHTML = data[i].title; 
//             arr[i].querySelector('.current').innerHTML = data[i].timeframes[timeframe].current + 'hrs'; 
//             arr[i].querySelector('.previous').innerHTML = `Last Week - ${data[i].timeframes[timeframe].previous}hrs`; 
//         }
//     })
//     .catch(error => console.log(error))
// }




