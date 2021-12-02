let list = document.getElementById("list");
let button = document.getElementById("btn"); 
let buttonFind = document.getElementById("btnFind"); 
let arr = ['person1','person2','person3','person4','person5','person6'];

button.addEventListener("click", printToScreen);
buttonFind.addEventListener("click", findRecipient); 



function findRecipient() {
    let recipient = document.getElementById("recipient");
    let buyerName = document.getElementById("name").value.toLowerCase();
    pairsArray = JSON.parse(localStorage.getItem("pairsArray")); 
    try {
        for (let buyer of pairsArray ) {
            if (buyer[0].toLowerCase() == buyerName) {
                recipient.innerHTML = buyer[1][0].toUpperCase() + buyer[1].slice(1); 
                return true;
            }
        }
    } catch {
        recipient.innerHTML = "Sorry, can't find who you are buying for."; 
    }
    
    recipient.innerHTML = "Sorry, can't find who you are buying for."; 
} 



function printToScreen() {
    list.innerHTML= "";
    let names = document.getElementById("nameList"); 
    let nameArr = names.value.split(/\,\s+/g); 
    let pairs = match(nameArr); 
    list.insertAdjacentHTML("afterbegin", nameArr + "<br>");
    
    // pairs.map(x => {
    //     let str = x[0] + " is buying for " + x[1] + "<br>";
    //     list.insertAdjacentHTML("beforeend", str);  

    // })

    localStorage.setItem("pairsArray", JSON.stringify(pairs)); 

    //to return the array from local storage.
    //JSON.parse(localStorage.getItem("pairsArray"))
}
function match(arr) {

    //array so we don't modify the original
    let newArr = arr.slice(0); 
    //An array so the original order isn't changed during for loop.
    let shuffledArr = arr.slice(0); 
    //An array to add already matched values
    let matchedArr = [];
    //an array to add each pair to. 
    let column = [];
    let columnLen  = 0;
    for (let i of newArr) {
            column.push(iterate(i,shuffledArr,matchedArr));
            columnLen = column.length; 
    }

    //check the last item is populated otherwise re-run
    if (column[columnLen-1] == undefined) {
        console.log("running again..."); 
        match(newArr); 
    }
    

    return column; 
    
}

function iterate(el, arr, alreadyMatched) {
    let row = []; 
    row.push(el); 
    //order array randomly
    shuffleArray(arr); 

    for (let j of arr) {
        //check if the item has already been matched and doesn't match the current element
        if (alreadyMatched.indexOf(j) == -1 && j != el) {
            row.push(j); 
            alreadyMatched.push(j);
            return row; 
        }
    }
    
}


//function to shuffle the array - found at https://www.codegrepper.com/code-examples/javascript/javascript+rearrange+array+in+a+random+order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



