function rot13(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    // console.log(alphabet);
  
    let decoded = "";
  
    for (let letter in str) {
      if (alphabet.indexOf(str[letter]) == -1) {
        decoded += str[letter];
      } else {
        // console.log((alphabet.indexOf(str[letter])-13 + 26) % 26)
        decoded += alphabet[(alphabet.indexOf(str[letter])-13 + 26) % 26];
      }
    }
  
    console.log(decoded);
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");