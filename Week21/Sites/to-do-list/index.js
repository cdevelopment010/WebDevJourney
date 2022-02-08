const listGroup = document.getElementById('goals'); 
const goalTitleInput = document.getElementById('goal-item');
const goalWhyInput = document.getElementById('goal-why');
const btn = document.getElementById('add-goal-btn');
let clickCount = 0; 
let goals ={};

btn.addEventListener('click', addGoal); 

if(localStorage.getItem('Goals') !== 'null') {
    goals = JSON.parse(localStorage.getItem('Goals')); 
    for (let goal in goals) {
        createLi(goal, goals[goal]); 
    }

}


function addGoal() {
    let goalTitle = String(goalTitleInput.value); 
    let why = String(goalWhyInput.value);    
    let currentGoal = {[goalTitle]: why}

    goals = Object.assign({}, goals, currentGoal);    
    localStorage.setItem('Goals', JSON.stringify(goals))
    
    createLi(goalTitle, why); 

    goalTitleInput.value = ''; 
    goalWhyInput.value = ''; 

}

function accordian() {
    this.parentElement.parentElement.querySelector('.why').classList.toggle('why-active'); 
    this.classList.toggle('i-active');
}

function removeGoal() {
    clickCount++ 
        if(clickCount == 1) {
            singleClickTimer = setTimeout(function() {
                clickCount = 0; 
            }, 300 )
        } else if (clickCount == 2) {
            clearTimeout(singleClickTimer); 
            clickCount = 0; 
            console.log('removeGoal clicked'); 
            this.remove();
            delete goals[this.children[0].innerText]; 
            localStorage.setItem('Goals', JSON.stringify(goals));            
        }
}


function createLi(goalTitle, why) {
    let li = document.createElement('li'); 
    let divTitle = document.createElement('div'); 
    let divWhy = document.createElement('div'); 
    let caret = document.createElement('i'); 

    caret.className = 'fas fa-caret-down'; 
    caret.addEventListener('click', accordian); 


    divTitle.className = 'goal-title'; 
    divTitle.innerText = goalTitle;
    divTitle.appendChild(caret);
    
    divWhy.className = 'why'; 
    divWhy.innerText = why;

    li.addEventListener('click', removeGoal); 
    li.className = 'card'; 
    li.appendChild(divTitle); 
    li.appendChild(divWhy); 
    listGroup.appendChild(li); 
}