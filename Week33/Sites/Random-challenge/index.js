const completeBtn = document.querySelector('button'); 
const challengeArea = document.getElementById('challenge-area'); 
const days = document.querySelectorAll('.day'); 
let currentChallenge, completedChallenge; 




days.forEach(day => {
    day.addEventListener('click', function() {
        this.classList.add('complete'); 
    })
})


selectChallenge(); 
completeBtn.addEventListener('click', completeChallenge);  




async function fetchJSON() {
    const response = await fetch('./data.json'); 
    const data = await response.json(); 
    return data; 
}


async function selectChallenge() {
    let challenges = await fetchJSON();
    let availableChallenges = []; 
    completedChallenge = JSON.parse(localStorage.getItem('dailyChallenge')) || []; 
    streak(); 
    
    challenges.forEach(x => {
        if(completedChallenge.length == 0) {
            availableChallenges.push(x); 
            return; 
        }
        for(let i =0; i < completedChallenge.length; i++) {
            if (x.name == completedChallenge[i].name) { //completedChallenge[i][0].name
                break; 
            }
            if (i = completedChallenge.length - 1) {
                availableChallenges.push(x); 
            }
        } 
    }); 
    
    
    // if a challenge has already been picked with today's date
    // or pick a random challenge;
    currentChallenge = JSON.parse(localStorage.getItem('dailyChallengeCurrent')) || availableChallenges[Math.floor((Math.random() * availableChallenges.length))]; 

    localStorage.setItem('dailyChallengeCurrent', JSON.stringify(currentChallenge)); 

    challengeArea.innerText = currentChallenge.name;
    return  currentChallenge; 
}


function completeChallenge() {
    let options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
    let today  = new Date();
    let day = today.getDay() - 1; 
    days[day].classList.add('complete'); 
    // currentChallenge.date = today.toLocaleDateString('en-US', options); 
    // completedChallenge.push(currentChallenge); 
    // console.log("completeChallengeAfterPush", completedChallenge); 
    // let localStorageString = JSON.stringify(completedChallenge); 
    // localStorage.setItem('dailyChallenge', localStorageString); 
    console.log(localStorage); 

}



function streak() {
    // highlight today
    let today  = new Date();
    let day = today.getDay() - 1; 
    days[day].classList.add('today'); 
    
    // check days which have been completed
    if (completedChallenge.length > 6) {
        for(let i = 0; i < 6; i++) {
            let day = completedChallenge[i].date.getDay() -1; 
            days[day].classList.add('complete'); 
        }
    } else {
        completedChallenge.forEach(challenge => {
            let day = new Date(challenge.date).getDay() -1; 
            days[day].classList.add('complete'); 
        })
    }
}