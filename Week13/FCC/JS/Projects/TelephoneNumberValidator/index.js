//it works, but could it be better?
function telephoneCheck(str) {
  
    //don't need this bit anymore
    // //check for letters in string and return false if true
    // let lettersRegex = /[a-z]/gi; 
    // if (lettersRegex.test(str) == true) {
    //     return false;
    // }

    //check length number length - should be 10 or 11
    let numberRegex = /\D/g; 
    if (str.split(numberRegex).join("").length < 10 || str.split(numberRegex).join("").length > 11) {
        return false;
    }

    //check if the first character is a 1 with a space or bracket
    let areaCode = /^1/; 
    if (str.split(numberRegex).join("").length == 11 && areaCode.test(str) == false) {
        return false;
    }

    //check equal brackets & only have 3 digits between them
    let bracketRegex = /\(\d{3}\)/g; 
    let singleBracket = /\(|\)/g;
    if (singleBracket.test(str) == true && bracketRegex.test(str) == false) {
        return false;
    }

    //split by - or space and then join to be in the format of XXX-XXX-XXXX
    let spaceDashRegex = /\s|\-|\)|\(/g; 
    let strNew = str.split(spaceDashRegex).filter(x => x != "").join("-"); 

    //check that it is in the format of XXX-XXX-XXXX or XXXXXXXXXX
    let spaceDashRegex2 = /\d{3}-\d{3}-\d{4}|\d{10}/;
    if (spaceDashRegex2.test(strNew) ==false) {
        return false;
    }
    console.log(str); 
    return true; 

  }
  
  telephoneCheck("123**&!!asdf#"); // should be false
  telephoneCheck("555-555-5555"); 
  telephoneCheck("1 555-555-5555"); 
  telephoneCheck("1(555)555-5555");
  telephoneCheck("0 (757) 622-7382");// should be false
  telephoneCheck("55555555"); // should be false
  telephoneCheck("1 555)555-5555"); // should be false
  telephoneCheck("(555)5(55?)-5555"); // should be false
  telephoneCheck("1 (555) 555-5555");