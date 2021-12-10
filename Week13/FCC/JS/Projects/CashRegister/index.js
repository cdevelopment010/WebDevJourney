//works, but how could I improve it?
function checkCashRegister(price, cash, cid) {
    let change = Number((cash - price).toFixed(2));
    let changeArr = []; 

    let currency = Object.fromEntries(cid);  
    console.log(); 
    let available = cid.reduce((prev, current) => prev + current[1] , 0).toFixed(2); 


    // if the available amount is less than the change retun insufficient
    if (available < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    //if available == change return closed till 
    if(available == change) {
        return {status: "CLOSED", change: cid}
    }

    //calculate change 
    //work down from largest change to smallest
    let i = 0; 
    while ( change > 0 ) {


        if (change >= 100 && currency["ONE HUNDRED"] > 0 ) {
            let multiple = Math.floor(change / 100); 
            multiple *100 > currency["ONE HUNDRED"] ? multiple = currency["ONE HUNDRED"]/100 : multiple; 
            currency["ONE HUNDRED"] -= currency["ONE HUNDRED"] * multiple;
            changeArr.push(["ONE HUNDRED",100 * multiple]); 
            change = Number((change - currency["ONE HUNDRED"]*multiple).toFixed(2));  
        } else if (change >= 20 && currency["TWENTY"] > 0 ) {
            let multiple = Math.floor(change / 20);
            multiple * 20 > currency["TWENTY"] ? multiple = currency["TWENTY"]/20 : multiple; 
            currency["TWENTY"] -= currency["TWENTY"] * multiple;
            changeArr.push(["TWENTY",20 * multiple]); 
            change = Number((change - 20*multiple).toFixed(2));  
        } else if (change >= 10 && currency["TEN"] > 0 ) {
            let multiple = Math.floor(change / 10); 
            multiple * 10> currency["TEN"] ? multiple = currency["TEN"]/10 : multiple; 
            currency["TEN"] -= currency["TEN"] * multiple;
            changeArr.push(["TEN",10 * multiple]); 
            change = Number((change - 10*multiple).toFixed(2));  
        } else if (change >= 5 && currency["FIVE"] > 0 ) {
            let multiple = Math.floor(change / 5); 
            multiple * 5 > currency["FIVE"] ? multiple = currency["FIVE"]/5 : multiple; 
            currency["FIVE"] -= currency["FIVE"] * multiple;
            changeArr.push(["FIVE",5 * multiple]); 
            change = Number((change - 5*multiple).toFixed(2));  
        } else if (change >= 1 && currency["ONE"] > 0 ) {
            let multiple = Math.floor(change / 1); 
            multiple * 1 > currency["ONE"] ? multiple = currency["ONE"]/1 : multiple; 
            currency["ONE"] -= currency["ONE"] * multiple;
            changeArr.push(["ONE",1 * multiple]); 
            change = Number((change - 1*multiple).toFixed(2));  
        } else if (change >= 0.25 && currency["QUARTER"] > 0 ) {
            let multiple = Math.floor(change / 0.25); 
            multiple * 0.25 > currency["QUARTER"] ? multiple = currency["QUARTER"]/0.25 : multiple; 
            currency["QUARTER"] -= currency["QUARTER"] * multiple;
            changeArr.push(["QUARTER",0.25 * multiple]); 
            change = Number((change - 0.25*multiple).toFixed(2));  
        } else if (change >= 0.1 && currency["DIME"] > 0 ) {
            let multiple = Math.floor(change / 0.1); 
            multiple * 0.1 > currency["DIME"] ? multiple = currency["DIME"]/0.1 : multiple; 
            currency["DIME"] -= currency["DIME"] * multiple;
            changeArr.push(["DIME",0.1 * multiple]); 
            change = Number((change - 0.1*multiple).toFixed(2));  
        } else if (change >= 0.05 && currency["NICKEL"] > 0 ) {
            let multiple = Math.floor(change / 0.05); 
            multiple * 0.05 > currency["NICKEL"] ? multiple = currency["NICKEL"]/0.05 : multiple; 
            currency["NICKEL"] -= currency["NICKEL"] * multiple;
            changeArr.push(["NICKEL",0.05 * multiple]); 
            change = Number((change - 0.05*multiple).toFixed(2));  
        } else if (change >= 0.01 && currency["PENNY"] > 0 ) {
            let multiple = Math.floor(change / 0.01); 
            multiple * 0.01> currency["PENNY"] ? multiple = currency["PENNY"]/0.01 : multiple; 
            currency["PENNY"] -= currency["PENNY"] * multiple;
            changeArr.push(["PENNY",0.01 * multiple]); 
            change = Number((change - 0.01*multiple).toFixed(2));  
        } 
                
        i ++; 

        //after cid.length fail - it hasn't found the right amount of cash 
        if (i > cid.length) {
            change = -1; 
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
    
    }

    

    console.log({status: "OPEN", change: changeArr}); 

    return {status: "OPEN", change: changeArr};
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}