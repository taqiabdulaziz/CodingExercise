/*eslint-disable*/

function palindrome(kata) {
    var reversedWord = "";
    
    for (let index = kata.length; index >= 0; index--) {
      reversedWord += kata.charAt(index);
    }
  
    if (reversedWord === kata) {
      return true;
    } else {
      return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome("katak")); // true
  console.log(palindrome("blanket")); // false
  console.log(palindrome("civic")); // true
  console.log(palindrome("kasur rusak")); // true
  console.log(palindrome("mister")); // false
