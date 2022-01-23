let rejectBtn = document.getElementById('reject-btn'); 
let acceptBtn = document.getElementById('accept-btn'); 
let mainCard = document.getElementById('main-card'); 
let lastCard = document.getElementById('last-card'); 

rejectBtn.addEventListener('click', function() {
    mainCard.classList.toggle('reject-click');
    intoView();
    setTimeout(()=>mainCard.classList.toggle('reject-click'),500)
})
acceptBtn.addEventListener('click', function() {
    mainCard.classList.toggle('accept-click');
    intoView();
    setTimeout(()=>mainCard.classList.toggle('accept-click'),500); 
})

function intoView() {
    lastCard.classList.toggle('intoView-click'); 
    setTimeout(()=>lastCard.classList.toggle('intoView-click'),500)

}