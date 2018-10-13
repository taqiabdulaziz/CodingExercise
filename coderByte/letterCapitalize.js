function LetterCapitalize(str) {
  var string = "";
  var counter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      string+= str.charAt(i).toUpperCase()
    } else if (string.charAt(string.length-1)== " ") {
      string+= str.charAt(i).toUpperCase()
    } else {
      string+= str.charAt(i).toLowerCase()
    }
    
  }
  return string;
}

// keep this function call here
//   LetterCapitalize(readline());
console.log(LetterCapitalize("i have three"));
