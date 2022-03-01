import React, {useEffect, useRef} from "react";


const  Timer = () => {

    let runTimer = useRef(0); 
    let interval = useRef(); 

    const startTimer =  (work,count,timeSec) => {
        if (runTimer.current === 0) {
            resetBody();
            return; 
        }
        let audio = new Audio('mixkit-classic-short-alarm-993.wav');        
        audio.play(); 
        document.getElementById('loop').innerText = count;
        document.getElementById('work-rest').innerText = work === 1 ? 'Work' : 'Rest';

        if (work === 1) {
            document.body.classList.add('timer-work');
            document.body.classList.remove('timer-rest');
        } else {
            document.body.classList.remove('timer-work');
            document.body.classList.add('timer-rest');
        }

        
        let time = new Date();   
        let futureTime = new Date(time.getTime() + (1000 * timeSec + 100)); 
        interval.current = setInterval(()=>{

            if (runTimer.current === 0) {
                clearInterval(interval.current); 
                resetBody();
                return; 
            }
            
            time = new Date();
            let timeRemaining =  Math.floor((futureTime.getTime() - time.getTime())/1000);         
            if (timeRemaining < 0) {
                // cancel timer
                clearInterval(interval.current)
            } else {
                document.getElementById('time-remaining').innerText = zeroPad(timeRemaining); 
            }}, 1000 )

        
        if (count > 1 && work === 1){
            setTimeout(()=> {
                console.log('next loop with rest');
                clearInterval(interval.current); 
                startTimer(0, count, document.getElementById('rest-time').value)
            }, 1000*timeSec)
        } else if (count-1 > 0 ) {
            setTimeout(function(){
                console.log('next loop with work');
                clearInterval(interval.current); 
                startTimer(1,--count, document.getElementById('work-time').value)
            }, 1000 * timeSec)
        } else {
            setTimeout(function(){
                console.log('finished');
                clearInterval(interval.current); 
                resetBody();
                audio.play(); 
                setTimeout(() => {
                    audio.pause(); 
                    audio.currentTime=0;
                    audio.play()
                }, 500)
            }, 1000 * timeSec)
        }       
    }



    const handleClick = () => {
        runTimer.current = 1; 
        startTimer(1,document.getElementById('num-exercises').value,document.getElementById('work-time').value)  
    }

    const cancelTimer = () => {
        clearInterval(interval.current); 
        runTimer.current = 0; 
    }

    function zeroPad(num) {
        return String(num).length < 2 ? "0" + num : num; 
    }

    function resetBody() {
        document.getElementById('work-rest').innerText = 'Work'
        document.getElementById('loop').innerText = '0'; 
        document.getElementById('time-remaining').innerText = '0'; 
        document.body.classList.remove('timer-work');
        document.body.classList.remove('timer-rest');
    }

    useEffect(()=> {
        return() => {
            runTimer.current = 0; 
        }
    })
    
    return (
            <div>
                <div className="timer">
                <label htmlFor="work-time">
                    Seconds of exercise
                    <input type="number" name="work-time" id="work-time" min="0" />
                </label>

                <label htmlFor="rest-time">
                    Seconds of Rest
                    <input type="number" name="rest-time" id="rest-time" min="0"/>
                </label>

                <label htmlFor="num-exercises">
                    Number of exercises
                    <input 
                        type="number" 
                        name="num-exercises" 
                        id="num-exercises" 
                        min="0"
                        defaultValue="0"
                        />
                </label>

                <button type="button" onClick={() => handleClick()}>START!</button>
                <button type="button" onClick={cancelTimer}>STOP!</button>

                <div id="work-rest">Work</div>
                <div>
                    <div>Time remaining:</div>
                    <div id="time-remaining">0</div>
                </div>
                <div>
                    <div>Exercises remaining:</div>
                    <div id="loop">0</div>
                </div>
                </div>

            </div>
        )
    }

export default Timer