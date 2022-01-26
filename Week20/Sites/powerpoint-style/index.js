let rightArrow = document.getElementById('rightArrow');
let leftArrow = document.getElementById('leftArrow');
let sections = document.querySelectorAll('section'); 
let modal = document.querySelector('.modal'); 
let overlay = document.querySelector('.black-overlay')
let position = 0;
let titles = document.querySelectorAll('h1'); 

let clicks = 0; 
let timer = null;


let pTags = document.querySelectorAll('p');


rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);

titles.forEach(title => {
    title.addEventListener('dblclick', function() {
        changeInnerText(this); 
    }); 
    title.addEventListener('dragend', function(e) {
        let endX = e.clientX; 
        let endY = e.clientY; 

        console.log(endX, endY);
        console.log(this); 
        this.style.cssText = `position: absolute; top: ${endY}px; left: ${endX}px`
    })
})




pTags.forEach(tag => {
    let id = tag.parentElement.id[tag.parentElement.id.length-1]; 
    if (id >= 3){
        tag.addEventListener('dblclick', function(){
            changeInnerText(this);
        })
    }

    tag.addEventListener('dragend', function(e) {
        let endX = e.clientX; 
        let endY = e.clientY; 

        console.log(endX, endY);
        console.log(this); 
        this.style.cssText = `position: absolute; top: ${endY}px; left: ${endX}px`
    })
})

document.body.addEventListener('keydown', (e) => {
    // console.log(e.key); 
    if (e.key == 'ArrowRight') {
        if (position < sections.length) {
            moveRight(); 
        }

        else {
            reset();
        }
    }

    if (e.key == 'ArrowLeft') {
        if (position > 0) {
            moveLeft(); 
        }
    }
})

overlay.addEventListener('click', reset, false); 

function moveRight() {
    console.log("right - before run", position);
    if (position < sections.length - 1) {
        sections[position].style.cssText = 'left: -100%'; 
        sections[position].nextElementSibling.style.cssText = 'left: 0'; 
    } else {
        modal.classList.toggle('hidden'); 
        overlay.classList.toggle('hidden'); 
    }
    position++; 
    console.log("right -after run", position);
}

function moveLeft() {
    console.log("left - before run", position);
    if (position < sections.length && position > 0) {
        sections[position].style.cssText = 'left: 100%'; 
        sections[position-1].style.cssText = 'left: 0'; 
        console.log(sections[position].nextElementSibling); 
        position--; 
    }
    console.log("left - after run", position);
}

function reset(e) {
    // e.stopPropagation();
    sections.forEach(section => {
        section.style.cssText = 'left: 100%; ';
    }); 
    position = 0; 
    sections[0].style.cssText = 'left: 0; '
    modal.classList.toggle('hidden'); 
    overlay.classList.toggle('hidden'); 
}; 

function changeInnerText(item) {
    let val = item.innerText; 
        console.log(val); 
        let input = document.createElement('input'); 
        input.value = val; 
        input.onblur = function() {
            let val = this.value; 
            this.parentNode.innerText = val; 
        }
        item.innerText = '';
        item.appendChild(input);
        input.focus(); 
}