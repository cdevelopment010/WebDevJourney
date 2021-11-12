let text = document.getElementById('text'); 

let word = text.innerText; 

function typeOut(x) {
    let wordTypeOut = ""; 
    for (let i = 0; i < x.length; i++) {
        setTimeout(function timer() {
            wordTypeOut += x[i];
            text.innerHTML = wordTypeOut;
        }, i * 250);
    }
}


// for (let i = 0; i < word.length; i++) {
//     wordTypeOut += word[i]; 
//     console.log(wordTypeOut); 
//     text.innerHTML = wordTypeOut;
// }


function changeText() {
    let y = prompt("Add new text"); 
    typeOut(y);
}

typeOut(word);