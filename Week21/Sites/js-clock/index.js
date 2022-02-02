const hourAlarm = document.querySelector('#hour-alarm');
const startAlarm = document.querySelector('#start-alarm'); 
const minuteAlarm = document.querySelector('#minute-alarm');
const confirmAlarmBtn = document.querySelector('#confirm-btn'); 
const snoozeAlarmBtn = document.querySelector('#cancel-btn');
const modal = document.querySelector('.modal'); 
const hourDiv = document.querySelector('.hours');
const minuteDiv = document.querySelector('.minutes');
const secondsDiv = document.querySelector('.seconds');
const dayDiv = document.querySelector('.day');
const alarmSound = document.querySelector('audio'); 
const alarmSet = document.querySelector('.alarm-set'); 
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


// hands for clock face
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

let alarm = true;
let timer; 
let alarmDay = new Date; 
alarmDay= alarmDay.getDay(); 
let today = new Date(); 

startAlarm.addEventListener('click', ()=> {
    console.log('btn clicked'); 
    alarm = true;
    if (hourAlarm.value <= today.getHours()) {
        if (minuteAlarm.value <= today.getMinutes()) {
            alarmDay++;
        }
    }
    if (hourAlarm.value != '' && minuteAlarm.value != '') {
        alarmSet.innerText = `The alarm is set for ${days[alarmDay]} ${padding(hourAlarm.value)}:${padding(minuteAlarm.value)}`
    }
    clearInterval(timer); 
    timer = setInterval(function() {
        clock(); 
        updateHand(); 
        // if (!alarm) {
        //     clearInterval(timer); 
        // }
    }, 1000)
})

confirmAlarmBtn.addEventListener('click', closeAlarm); 
snoozeAlarmBtn.addEventListener('click', snoozeAlarm); 

function clock() {
    today = new Date(); 
    hourDiv.innerText = padding(today.getHours());
    minuteDiv.innerText = padding(today.getMinutes()); 
    secondsDiv. innerText = padding(today.getSeconds()) ; 
    dayDiv.innerText = days[today.getDay()]; 

    checkAlarm(today.getHours(), today.getMinutes(), today.getDay()); 
    
}

function padding(pad) {
    if (String(pad).length == 1) {
        return `0${pad}`; 
    }
    return pad; 
}

function checkAlarm(currHr, currMin, currDay) {
    if (hourAlarm.value != '' || minuteAlarm.value != '') {
            if (alarm && Number(currHr) >= hourAlarm.value && Number(currMin) >= minuteAlarm.value && currDay >= alarmDay) {
                document.body.classList.toggle('flash'); 
                modal.classList.remove('hidden'); 
                alarmSound.currentTime = 0; 
                alarmSound.play(); 
            }
    }
}


function closeAlarm() {
    alarm = false; 
    modal.classList.add('hidden');
    document.body.classList.remove('flash'); 
    alarmSound.pause();
    alarmSound.currentTime = 0;  
}

function snoozeAlarm() {
    this.parentNode.children[0].innerText = `I'm not letting you snooze - wake up!`
}

function updateHand() {
    let seconds = today.getSeconds(); 
    let secondsRotate = ((seconds/60) *360) - 90; 

    let minutes = today.getMinutes(); 
    let minutesRotate = ((minutes / 60) * 360) + ((seconds/60)*6) - 90; 

    let hours = today.getHours(); 
    let hoursRotate = ((hours / 12) * 360) + ((minutes/60)*30) - 90; 
    
    secondHand.style.transform = `rotate(${secondsRotate}deg)`; 
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`; 
    hourHand.style.transform = `rotate(${hoursRotate}deg)`; 
}