/*eslint-disable*/
function reverseLetter(str) {
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var result = ''
  for (let i = str.length; i >= 0 ; i--) {
    for (let j = 0; j < alph.length; j++) {
        if (str.charAt(i) == alph.charAt(j)) {
            result +=str.charAt(i) 
        }
    }
  }

  return result
}

console.log(reverseLetter("ultr53o?n"));
