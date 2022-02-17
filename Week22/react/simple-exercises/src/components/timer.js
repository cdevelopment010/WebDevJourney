import React, { useEffect } from "react";


const Timer = () => {


    let audio = new Audio('mixkit-classic-short-alarm-993.wav')

    const zeroPad = (num) => {
         return String(num).length < 2 ? "0" + num : num; 
    }

    const updateTimer = (work,count,timeSec) => {
        audio.play(); 
        document.getElementById('loop').innerText = count;
        document.getElementById('work-rest').innerText = work == 1 ? 'Work' : 'Rest';

        if (work === 1) {
            document.body.classList.add('timer-work');
            document.body.classList.remove('timer-rest');
        } else {
            document.body.classList.remove('timer-work');
            document.body.classList.add('timer-rest');
        }


        let time = new Date(); 
        let futureTime = new Date(time.getTime() + (1000 * timeSec) + 800); 
        
        
        let timeOut = setInterval(()=>{
                time = new Date();
                let timeRemaining =  Math.floor((futureTime.getTime() - time.getTime())/1000)
                if (timeRemaining >= 0) {
                    document.getElementById('time-remaining').innerText = zeroPad(timeRemaining); 
                }
                else {
                    clearInterval(timeOut); 
                }
            }, 1000 )

        if (count > 1 && work == 1){
            setTimeout(()=> {
                console.log('next loop with rest');
                clearInterval(timeOut); 
                updateTimer(0, count, document.getElementById('rest-time').value)
            }, 1000*timeSec + 1000)
        } else if (count-1 > 0 ) {
            setTimeout(function(){
                console.log('next loop with work');
                clearInterval(timeOut); 
                updateTimer(1,--count, document.getElementById('work-time').value)
            }, 1000 * timeSec + 1000)
        } else {
            setTimeout(function(){
                console.log('finished');
                clearInterval(timeOut); 
                document.getElementById('work-rest').innerText = 'Finished'
                document.getElementById('loop').innerText = '0'; 
                document.getElementById('time-remaining').innerText = '0'; 
                document.body.classList.remove('timer-work');
                document.body.classList.remove('timer-rest');
                audio.play(); 
                setTimeout(() => {
                    audio.pause(); 
                    audio.currentTime=0;
                     audio.play()
                }, 500)
            }, 1000 * timeSec + 500)
        }
        
    }

    
    const handleClick = ()=> {
        
        updateTimer(1,document.getElementById('num-exercises').value,document.getElementById('work-time').value); 
        
        
    }

   


    return(
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