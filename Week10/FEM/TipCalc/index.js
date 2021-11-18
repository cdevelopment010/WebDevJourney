let bill = document.getElementById("bill");
let people = document.getElementById("people");
let totalResult = document.getElementById("totalResult"); 
let tipResult = document.getElementById("tipResult"); 
let resetBtn = document.getElementById("resetBtn"); 
let customTip = document.getElementById("customTip"); 
let tipPercent = 0; 


let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}); 


function reset() {
    location.reload();
}

function update() {
    checkPeople();
    if (bill.value*((100+tipPercent)/100) / people.value != Infinity && bill.value*((100+tipPercent)/100) / people.value > 0) {
        tipResult.innerHTML = formatter.format((bill.value*((100+tipPercent)/100) - bill.value)/ people.value);
        totalResult.innerHTML =  formatter.format(bill.value*((100+tipPercent)/100) / people.value);
    }
        
     else {
        totalResult.innerHTML = "$0.00";
        tipResult.innerHTML = "$0.00";
    }
    
}


function active(item) {
    //set tip as custom tip, else use selector below

    customTip.value = "";
    customTip.classList.remove("select__item--selected");

    //remove active selector from sibling items
    checkSib(item);    

    //add selected item 
    item.classList.add("select__item--selected"); 
    tipPercent = Number(item.textContent.replace(/\W/g, ''));

    //update calculator
    update(); 
}


function checkSib(sib) {
    //remove selected item from all others siblings. 
        
    let siblings = [];
        
    //check for parent
    if (!sib.parentNode) {
        console.log("no-parent");
    }

    // first child of the parent node
    let sibling = sib.parentNode.firstChild; 

    //collect siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling != sib) {
            siblings.push(sibling); 
            sibling.classList.remove("select__item--selected")
            
        }

        sibling = sibling.nextSibling;
    }
}


// check number of people

function checkPeople(){
    if (people.value =="" || people.value ==0) {
        people.parentNode.classList.add("error");
    } else { 
        people.parentNode.classList.remove("error");
    }
}

// check if input is active 

function activeInput() {
    
    bill.parentNode.classList.remove("active"); 
    people.parentNode.classList.remove("active"); 
    customTip.classList.remove("active");  

    if (this == document.activeElement){
        if (this === customTip) {
            this.classList.add("active"); 
        } else {
            this.parentNode.classList.add("active"); 
        }
    } else {
        bill.parentNode.classList.remove("active"); 
        people.parentNode.classList.remove("active"); 
        customTip.classList.remove("active");
    }
    

}




bill.addEventListener("focusin", activeInput);
people.addEventListener("focusin", activeInput);
customTip.addEventListener("focusin", activeInput);
bill.addEventListener("change", update); 
people.addEventListener("change", update);
customTip.addEventListener("click", function() {
    checkSib(customTip);
})
customTip.addEventListener("change", function() {
    tipPercent = Number(customTip.value); 
    update();
});
resetBtn.addEventListener("click", reset); 