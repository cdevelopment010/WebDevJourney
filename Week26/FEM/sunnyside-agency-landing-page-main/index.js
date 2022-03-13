let burger = document.getElementById('burger'); 
burger.addEventListener('click', toggleBurger); 


function toggleBurger() {
    let ul = document.querySelector('nav ul'); 
    ul.classList.toggle('hidden'); 
}