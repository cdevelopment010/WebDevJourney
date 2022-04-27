let card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
    card2.classList.toggle('is-flipped');
});


let card1 = document.querySelector('.card');
console.log(card1); 
card1.addEventListener( 'click', function() {
    console.log('flip');
    card1.querySelector('.bottom-half').classList.toggle('flip');
});