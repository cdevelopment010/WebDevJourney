let calcTextP = document.getElementById('stringCalc');
let calcSumP = document.getElementById('calc');
let calcText = ""; 
let calcSum = 0; 


function equals() {

    try {
        calcSum = eval(calcText.trim());
        
    } catch(err) { 
        try {
            calcSum = Number(calcText.trim() * 1);
        } catch(err) {
            calcSumP.innerHTML = err;
        }
    }
    
    calcTextP.innerHTML = calcText;
    calcSumP.innerHTML = calcSum;
}
function cal(val) {
    calcText +=  val; 
    calcSum += Number(val);


    calcTextP.innerHTML = calcText;
}

function reset() {
    calcText = ""; 
    calcSum = 0; 

    calcTextP.innerHTML = "";
    calcSumP.innerHTML = "";
}

function openBracket() {
    cal('(');
}

function closeBracket() {
    cal(')');
}
function power() {
    cal('**');
}
function modulus() {
    cal('%');
}
function divide() {
    cal('/');
}

function multiply() {
    cal('*');
}

function subtract() {
    cal('-');
}

function addition() {
    cal('+');
}

function zero() {
    cal(0);
}

function one() {
    cal(1);
}

function two() {
    cal(2);
}

function three() {
    cal(3);
}

function four() {
    cal(4);
}

function five() {
    cal(5);
}

function six() {
    cal(6);
}

function seven() {
    cal(7);
}

function eight() {
    cal(8);
}

function nine() {
    cal(9);
}