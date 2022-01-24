let rejectBtn = document.getElementById('reject-btn'); 
let acceptBtn = document.getElementById('accept-btn'); 
let mainCard = document.getElementById('main-card'); 
let lastCard = document.getElementById('last-card'); 
let section = document.getElementById('section'); 

let dogImg = document.getElementById('dog-img'); 
let dogName = document.getElementById('name');
let dogAge = document.getElementById('age');
let dogInterest = document.getElementById('interest-text');
let dogAbout = document.getElementById('about-text');


let index = 0; 
let Dogs =[]


fetchDogs();

rejectBtn.addEventListener('click', function() {
    mainCard.classList.toggle('reject-click');
    intoView();
    setTimeout(()=>mainCard.classList.toggle('reject-click'),500);
    // index = ++index % Dogs.length;
    ++index;
    checkDogs(index); 
    updateDog(index); 

})
acceptBtn.addEventListener('click', function() {
    mainCard.classList.toggle('accept-click');
    intoView();
    setTimeout(()=>mainCard.classList.toggle('accept-click'),500); 
    // index = ++index % Dogs.length;
    ++index;
    checkDogs(index); 
    updateDog(index); 
})




function checkDogs(index) {
    if (index >= Dogs.length) {
        section.innerHTML = ''; 
        section.innerHTML = `
            <h1 class='title'>Sorry, there are no more dogs in your area!</h1>
        `
    }
}

function intoView() {
    lastCard.classList.toggle('intoView-click'); 
    setTimeout(()=>lastCard.classList.toggle('intoView-click'),500)

}


function updateDog(index) {
    console.log(Dogs[index]['img'])
    dogImg.src = Dogs[index]['img']; 
    dogName.innerHTML = Dogs[index]['name']; 
    dogAge.innerHTML = Dogs[index]['age']; 
    dogInterest.innerHTML = Dogs[index]['interest']; 
    dogAbout.innerHTML = Dogs[index]['about']; 
}

async function fetchDogs (){
    const response = await fetch('./Dogs.json')
    .then(res => res.json())
    .then(data => data.forEach(x=> {
        Dogs.push(x)
    })); 


    updateDog(index); 
}
