
let num = 5;
let circleList = [];
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


// dynamically change canvas size based on screen size
if (window.innerWidth < 600) {
    canvas.width = window.innerWidth * 0.8; 
} else if (window.innerWidth < 900){
    canvas.width = window.innerWidth * 0.7;
}  else {
    canvas.width = window.innerWidth * 0.4;
}
canvas.height = canvas.width; 
canvas.style.backgroundColor = 'white'; 

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let radius = 30;



function createCircle() {
    let newPath = new Path2D();  
    
    newPath.arc(centerX*Math.random(),centerY*Math.random(), radius, 0, 2 * Math.PI); 
    ctx.fillStyle='blue'; 
    ctx.fill(newPath); 
    ctx.stroke(newPath); 
    circleList.push({
        id: circleList.length, 
        newPath,
        start: new Date()}); 

}


function setIntervalReps(callback, delay, reps) {
    let counter = 0; 
    let interval = setInterval(function() {
        callback(counter); 

        if (++counter === reps) {
            clearInterval(interval); 
        }
    }, delay)
}

function checkFinish() {
    let complete = circleList.filter(circle => 'end' in circle)
    return complete.length === num; 
}

function calculateTime() {
    let totalTime = 0;
    circleList.map(circle => {
        console.log(circle);
        totalTime += circle.end - circle.start
    }); 
    totalTime = totalTime / 1000; 

    if (totalTime / num <= 1) {
        alert(`Wow there! Fast as lighening! Total time ${totalTime}`)
    } else {
        alert(`Oh no! Maybe you need more practice...\nTotal time ${totalTime}`)
    }
}










setIntervalReps(createCircle, 1000, num); 


canvas.addEventListener('click', function(event) {
    event = event || window.event; 
    console.log(event); 

    for (let i = circleList.length - 1; i >= 0; i --) {
        if (circleList[i] && ctx.isPointInPath(circleList[i].newPath, event.offsetX, event.offsetY)) {
            console.log(i, new Date()); 
                circleList[i]['end'] = new Date(); 
                canvas.style.cursor = 'pointer';
                ctx.fillStyle = 'orange';
                ctx.fill(circleList[i].newPath);
                console.log(checkFinish()); 

                if (checkFinish()) {
                    calculateTime();
                }
            return;
            } 
    }
})


