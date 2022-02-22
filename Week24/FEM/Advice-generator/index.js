const adviceID = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const btn = document.querySelector('.image'); 

// Have a quote ready on load
adviceGenerator(); 

btn.addEventListener('click', function(){
    adviceGenerator() 
})


function adviceGenerator() {
    try {
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            adviceID.innerText = `Advice #${data.slip.id}`; 
            adviceText.innerText = `"${data.slip.advice}"`;
        })
    } catch (err) {
        console.log(err)
    } 
}