const increaseNode = document.querySelectorAll('.increase');
const decreaseNode = document.querySelectorAll('.decrease'); 
const calendarDiv = document.querySelector('.calendar'); 
const yearInput = document.querySelector('#year');
const monthInput = document.querySelector('#month');
const add = document.querySelector('#add'); 
const close = document.querySelector('#close'); 
const modal = document.querySelector('.modal'); 
const taskTable = document.querySelector('#task-table'); 
const clearTasks = document.querySelector('#clear-tasks'); 
let monthIndex = (new Date()).getMonth(); 
const months = [
    'Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
];

let items =localStorage.getItem('tasks') !== 'null' ?
                     JSON.parse(localStorage.getItem('tasks')) :
                     [];



yearInput.value = (new Date()).getFullYear(); 
monthInput.value = months[monthIndex]; 
calendar(monthIndex, yearInput.value);

for (let item in items ) {
    createItem(items[item].date, items[item].title, items[item].desc); 
}



monthInput.addEventListener('change', changeInput)
yearInput.addEventListener('change', changeInput)

increaseNode.forEach(x => {
    x.addEventListener('click', increase); 
})
decreaseNode.forEach(x => {
    x.addEventListener('click', decrease); 
})

close.addEventListener('click', closeModal); 
add.addEventListener('click', () => {
    addItem(); 
    closeModal(); 
})


clearTasks.addEventListener('click', function() {
    localStorage.removeItem('tasks'); 
    items = {}; 
    alert(`Items deleted`); 
    taskTable.querySelectorAll('tbody tr').forEach(el => el.remove()); 
})





function increase() {
    if (this.parentElement.getAttribute('for') === 'year') {
        yearInput.value++; 
    } else {
        monthIndex = (monthIndex+1) % 12;
        if (monthIndex === 0 ){
            yearInput.value++;
        } 
        monthInput.value = months[monthIndex] 

    }
    calendar(monthIndex, yearInput.value);
}
function decrease() {
    if (this.parentElement.getAttribute('for') === 'year') {
        yearInput.value--; 
    } else {
        monthIndex = ((monthIndex-1)+12) % 12;
        if (monthIndex === 11 ){
            yearInput.value--;
        } 
        monthInput.value = months[monthIndex] 

    }
    calendar(monthIndex, yearInput.value);
}


function changeInput() {
    if(this.id !== 'year') {
        monthIndex = months.indexOf(this.value); 
    }
    calendar(monthIndex, yearInput.value);
}

function calendar(month, year) { 
    let startDate = new Date(year, month, 1); 
    let endDate = new Date(new Date(year, month+1, 1)-1);  
    let dateDiff = endDate.getDate()-startDate.getDate()+1; 
    let days = ['S', 'M', 'T','W','T','F','S'];
    calendarDiv.innerHTML = ''; 

    // set header days
    for (let i = 0; i <= 6; i++) {
        let day = document.createElement('div'); 
        day.innerText = days[i]; 
        day.className = 'day-header'
        calendarDiv.append(day); 
    }

    if (startDate.getDay() !== 0) {
        for (let j = 0; j < startDate.getDay(); j++) {
            let day = document.createElement('div'); 
            day.className = 'blank-day'; 
            calendarDiv.append(day); 
        }
    }

    for (let i = 1; i <= dateDiff; i++) {

        let day = document.createElement('div'); 
        let date_ = new Date(year, month, i); 
        day.innerText = date_.getDate(); 
        day.addEventListener('click', getDayFromCalendar); 
        if (date_.toDateString() == (new Date()).toDateString()) {
            day.classList.add('today'); 
        }
        calendarDiv.append(day); 
    }

    for (let k = 0; k < calendarDiv.children.length % 7; k++) {
        let day = document.createElement('div'); 
            day.className = 'blank-day'; 
            calendarDiv.append(day);
    }

}

function getDayFromCalendar() {
    modal.classList.remove('hidden'); 
    document.querySelector('.overlay').classList.remove('hidden');
    modal.querySelector('p').innerText=''; 
    modal.querySelector('p').innerText=(new Date(yearInput.value, monthIndex, this.innerText).toDateString()); 
}

function closeModal() {
    modal.classList.add('hidden'); 
    document.querySelector('.overlay').classList.add('hidden');
}

function addItem() {   


  
    let currentItem = {[modal.querySelector('#item-title').value]: {
        date: modal.querySelector('p').innerText,  
        title: modal.querySelector('#item-title').value, 
        desc: modal.querySelector('#item-desc').value 
    }}
    

    items = Object.assign({}, items, currentItem); 

    localStorage.setItem('tasks', JSON.stringify(items)); 

    createItem( modal.querySelector('p').innerText, 
                modal.querySelector('#item-title').value, 
                modal.querySelector('#item-desc').value)


    modal.querySelector('p').innerText = ''; 
    modal.querySelector('#item-title').value = ''; 
    modal.querySelector('#item-desc').value = ''; 

}

function deleteRow() {
    this.innerHTML = ''; 
}

function createItem(dateIn, title, desciption) {
    let newRow = document.createElement('tr'); 
    let date = document.createElement('td');
    let task = document.createElement('td');
    let desc = document.createElement('td');

    date.innerText = dateIn; 
    task.innerText = title;
    desc.innerText = desciption;

    newRow.append(date);
    newRow.append(task);
    newRow.append(desc);

    newRow.addEventListener('click', deleteRow)

    taskTable.querySelector('tbody').append(newRow); 
}