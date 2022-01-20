const pole1 = document.getElementById("pole1");
const pole2 = document.getElementById("pole2");
const pole3 = document.getElementById("pole3");
const playBtn = document.getElementById("playBtn"); 
const restartBtn = document.getElementById("restartBtn"); 
const startForm = document.getElementById("start-form"); 
const restartForm = document.getElementById("restart-form"); 
const counterPara = document.getElementById("counter"); 

let selectedDisc = '';
let currentPole = '';
let targetPole = ''; 
let counter = 0; 

let input = 0;

playBtn.addEventListener('click', function(){
    input = this.parentElement.children[0].value;
    if (input >= 3 && input <=10) {
        createDisk(input); 
        this.parentElement.children[0].value  = "";
        startForm.classList.add("hidden");  
        updateCounter();
    } else {
        alert("please pick a number between 3 and 10.");
        this.parentElement.children[0].value  = "";
    }

})

restartBtn.addEventListener('click', function() {
    input = 0; 
    counter=0; 
    reset(); 
    startForm.classList.remove("hidden"); 
    restartForm.classList.add("hidden"); 
    pole1.innerHTML = ''; 
    pole2.innerHTML = ''; 
    pole3.innerHTML = ''; 

})




function createDisk(num) {
    for (let i = 0; i < num; i++){
        let offset = 30 + (i*30); 
        let disk = document.createElement("div"); 
        
        disk.classList.add('disc'); 
        disk.style.bottom = offset + 'px'; 
        disk.style.width = 80- (i*(50/(num-1)))+'%'; 
        disk.id = `disk${i}`; 
        pole1.appendChild(disk); 

    }
}


function getFirstChild(pole) {
    if (selectedDisc==='') {
        currentPole = pole;
        if ( pole.getElementsByClassName('disc')[pole.getElementsByClassName('disc').length-1]) {
            selectedDisc = pole.getElementsByClassName('disc')[pole.getElementsByClassName('disc').length-1];
            selectedDisc.style.backgroundColor = 'blue'; 
            return selectedDisc
        } 
    } 

    if (selectedDisc == pole.getElementsByClassName('disc')[pole.getElementsByClassName('disc').length-1])  {
        selectedDisc.style.backgroundColor = 'black';
        reset(); 
    }
    
}

function moveToTargetPole(pole) {
    
    if (currentPole != pole && selectedDisc != '') {
        targetPole = pole; 

        moveDisc(currentPole, selectedDisc, targetPole); 
    } 

    if (currentPole == targetPole) {
        reset(); 
    }
}



function  moveDisc(currentPole, selectedDisc, targetPole)  {
    

    if(checkEmptyPole()) {
        targetPole.insertBefore(selectedDisc, targetPole.childNodes[0]); 
        selectedDisc.style.backgroundColor = 'black'; 
        selectedDisc.style.bottom = 30  + "px"; 
        updateCounter();
    } else if (checkDiscPosition()) {
        targetPole.append(selectedDisc); 
        selectedDisc.style.backgroundColor = 'black'; 
        selectedDisc.style.bottom = Math.max(60,(30*(targetPole.children.length)))+ "px"; 
        reset(); 
        updateCounter(); 
    }

    if (checkWin()) {
        restartForm.classList.remove("hidden"); 
    }

    

    reset(); 
    return selectedDisc, targetPole, currentPole;
}




function checkEmptyPole() {
    if (targetPole.children.length == 0 ){
        return true;
    } else {
        return false;
    }
}

function checkDiscPosition() {
    if (targetPole.children.length > 0 ) {
        let selectedPos = selectedDisc.id.slice(4); 
        let targetPos = targetPole.children[targetPole.children.length -1].id.slice(4)
        if(selectedPos < targetPos) {
            return false;
        } else {
            return true;
        }
    }; 
}

function updateCounter() {
    counter++; 
    counterPara.innerHTML = `Counter: ${counter}`; 
}

function reset() {
    selectedDisc = ''; 
    targetPole = ''; 
    currentPole = ''; 
}


function checkWin() {
    if (pole3.children.length ==  input) {
        return true; 
    } else {
        return false; 
    }
}



pole1.addEventListener('click', function() {
    getFirstChild(this) ; 
    moveToTargetPole(this);  
}); 
pole2.addEventListener('click', function() {
    getFirstChild(this) ; 
    moveToTargetPole(this);
})
pole3.addEventListener('click', function() {
    getFirstChild(this) ; 
    moveToTargetPole(this);
})