/*eslint-disable*/
function AlphabetSoup(str) {
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var arr = [];
  var result = "";

  for (let l = 0; l < str.length; l++) {
    arr.push(str[l]);
  }

  for (let i = 0; i < alph.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (alph[i] == arr[j]) {
        result += arr[j];
        arr.splice(j, 0);
      } else if (alph[i].toUpperCase() == arr[j].toUpperCase()) {
        result += arr[j];
        arr.splice(j, 0);
      }
    }
  }

  // code goes here
  return result;
}

console.log(AlphabetSoup("coderbyte"));
