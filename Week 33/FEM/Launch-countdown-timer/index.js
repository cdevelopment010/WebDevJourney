const launchDate = new Date(new Date().setDate(new Date().getDate() + 9)).getTime();
const dayText=document.getElementById('day').querySelector('.text'); 
const hourText=document.getElementById('hour').querySelector('.text'); 
const minuteText=document.getElementById('minute').querySelector('.text'); 
const secondText=document.getElementById('seconds').querySelector('.text'); 


function updateTime() {
    let currentTime = new Date().getTime(); 
    let difference = launchDate - currentTime; 
    const seconds = 1000; 
    const minutes = seconds * 60; 
    const hour = minutes * 60; 
    const day = hour * 24; 

    //update text; 

    dayText.innerText = Math.floor(difference / day); 
    hourText.innerText = Math.floor((difference % day) / hour); 
    minuteText.innerText = Math.floor((difference % hour) / minutes); 
    secondText.innerText = Math.floor((difference % minutes) / seconds); 

}

setInterval(updateTime, 1000); 