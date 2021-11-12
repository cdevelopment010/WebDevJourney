let timerCountDown = document.getElementById("timerCountDown"); 
let timeRemainingP = document.getElementById("timeRemaining");
let timeStart = document.getElementById("timeStart"); 
let sound = document.getElementById("beep"); 


var myCountDown; 

function val() {

    // document.body.style.backgroundColor = "#90BE6D"; 

    let timer = document.getElementById("time"); 
    let dt = Date.now();
    let dtFuture = dt + (timer.value * 1000 * 60) + 500; 
    
    
    let timeRemaining = dtFuture - Date.now(); 
    let  minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    timerCountDown.innerHTML ="Time Remaining: " + minutes + ":" + seconds ;

    myCountDown = setInterval(function(){
        let timeRemaining = dtFuture - Date.now(); 

        if (timeRemaining < 1000) {
            clearInterval(myCountDown);
            timerCountDown.innerHTML ="Time Remaining: 0:0";
            // document.body.style.backgroundColor = "#f3722c";         
            sound.play(); 
        }
        let  minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        timerCountDown.innerHTML ="Time Remaining: " + minutes + ":" + seconds ;

        
    }, 1000)
            
}


function stopCountDown() {
    clearInterval(myCountDown);
    // document.body.style.backgroundColor = "#f3722c"; 
    sound.play()
}


// setInterval(function() {
//     timerCountDown.innerHTML = Date.now();
// }, 1000)


/**********************************************************/

/* Second section timer using minutes and seconds */


let timeRemainingP2 = document.getElementById("timeRemaining2"); 

function minuteSecondsTimer() {

    let minutes = Number(document.getElementById("minutes").value);
    let seconds = Number(document.getElementById("seconds").value);
    
    
    let timeFuture;

    if (minutes == 0 && seconds == 0) {
        window.alert("Please enter a time."); 
    } else {
        myTimerFunc(minutes, seconds,timeRemainingP2);
    }

    
}


// function minuteSecondsTimer() {

//     let minutes = Number(document.getElementById("minutes").value);
//     let seconds = Number(document.getElementById("seconds").value);
//     let totalTime; 
    
//     minutes = minutes * 1000 * 60;
//     seconds = seconds * 1000;
//     totalTime = minutes + seconds; 

//     let expectedTime = Date.now() + totalTime + 50; 
//     let timeRemaining = expectedTime - Date.now(); 
    
//     minutes = zeroPadding(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
//     seconds = zeroPadding(Math.floor((timeRemaining % (1000 * 60)) / 1000));
//     timeRemainingP2.innerHTML = totalTime ="Time Remaining: " + minutes + ":" + seconds ;

//     let myCountDown2 = setInterval(function(){
        
//         let timeRemaining = expectedTime - Date.now(); 

//         if (timeRemaining < 1000) {
//             clearInterval(myCountDown2);
//             timeRemainingP2.innerHTML ="Time Remaining: 0:0";
//             // document.body.style.backgroundColor = "#f3722c";         
//             sound.play(); 
//         }

//         minutes = zeroPadding(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
//         seconds = zeroPadding(Math.floor((timeRemaining % (1000 * 60)) / 1000));
//         timeRemainingP2.innerHTML = totalTime ="Time Remaining: " + minutes + ":" + seconds ;

        
//     }, 1000)

    
// }




/**********************************************************/

/* third section timer - interval timer */

let countDown = document.getElementById('countDown'); 
let repsLeft = document.getElementById('repsLeft');
let workRestP = document.getElementById('workRest');
let workRest = "Work";
var intervalTimer; 


function interval() { 

    console.log("button started");
    let reps = Number(document.getElementById('reps').value);
    
    console.log(reps.value);
    workRestP.innerHTML = "Work";

    while (reps > 0) {
        console.log("for loop started " + reps);
        repsLeft.innerHTML = "Reps Left: " + (reps);
        console.log("Reps Left: " + (reps));
        
        let workMinutes = Number(document.getElementById('workMins').value);
        let workSeconds = Number(document.getElementById('workSecs').value);
        let restMinutes = Number(document.getElementById('restMins').value);
        let restSeconds = Number(document.getElementById('restSecs').value);
        let minutes, seconds; 

        if ( reps % 2 == 1) {
            minutes = workMinutes; 
            seconds = workSeconds;
            timeFuture = Date.now() + (minutes * 1000 * 60) + (seconds * 1000) + 50; //add 50 milliseconds to help with 

            intervalTimer = setInterval(function () {
            let timeRemaining = timeFuture - Date.now();

            if (timeRemaining < 1000) {
                clearInterval(intervalTimer);
                countDown.innerHTML = "Time Remaining: 00:00";
                // document.body.style.backgroundColor = "#f3722c";         
                sound.play();
            }

            minutes = zeroPadding(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
            seconds = zeroPadding(Math.floor((timeRemaining % (1000 * 60)) / 1000));
            countDown.innerHTML = "Time Remaining: " + minutes + ":" + seconds;
        }, 1000); 
            
            workRestP.innerHTML = "Work";
        } else {
            // myTimerFunc(restMinutes, restSeconds, countDown); 
            // workRestP.innerHTML = "Rest";

        }
        reps --;
    }
    
}


/**********************************************************/
// Zero padding
function zeroPadding(x,y=2) {
    let str = String(x); 
    if (str.length < y) {
        for(let i = str.length; i < y; i++) {
            str = "0" + str;
        }
    }

    return str;
    
}


// TimerFunction

function myTimerFunc(minutes, seconds, label) {

    timeFuture = Date.now() + (minutes * 1000 * 60) + (seconds * 1000) + 50; //add 50 milliseconds to help with 

    intervalTimer = setInterval(function () {
        let timeRemaining = timeFuture - Date.now();

        if (timeRemaining < 1000) {
            clearInterval(intervalTimer);
            label.innerHTML = "Time Remaining: 00:00";
            // document.body.style.backgroundColor = "#f3722c";         
            sound.play();
        }

        minutes = zeroPadding(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
        seconds = zeroPadding(Math.floor((timeRemaining % (1000 * 60)) / 1000));
        label.innerHTML = "Time Remaining: " + minutes + ":" + seconds;
    }, 1000)
}   


function myTimerFunc2(minutes, seconds, label, reps) { 

    for (let i =0; i < 5; i ++) {
        console.log(i);
    intervalTimer = 
            setTimeout(function () {
                let timeFuture = Date.now() + (minutes * 1000 * 60) + (seconds * 1000) + 50; //add 50 milliseconds to help with
                let timeRemaining = timeFuture - Date.now();
        
               
                        timeRemaining = timeFuture - Date.now();
                        console.log(i);
        
                        if (timeRemaining < 1000) {
        
                            //recursive function????
        
        
                            clearInterval(intervalTimer);
                            label.innerHTML = "Time Remaining: 00:00";
                            // document.body.style.backgroundColor = "#f3722c";         
                            sound.play();
                        }
        
                        minutes = zeroPadding(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
                        seconds = zeroPadding(Math.floor((timeRemaining % (1000 * 60)) / 1000));
                        label.innerHTML = "Time Remaining: " + minutes + ":" + seconds;
                                
                }, 1000)
        }
    
}

