/*eslint-disable*/
function high(x) {
  var alphArr = x.split(" ");
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var arr = [];
  var arrTemp = "";
  var check = false;
  var arr2 = [];
  var arrTemp2 = 0;
  var highestScore = 0;

  for (let i = 0; i < alphArr.length; i++) {
    for (let j = 0; j < alphArr[i].length; j++) {
      for (let l = 0; l < alph.length; l++) {
        if (check == false && l == alph.length - 1) {
          arrTemp += alphArr[i][j];

          for (let n = 0; n < alph.length; n++) {
            if (alph[n] == alphArr[i][j]) {
              arrTemp2 += n;
            }
          }
        }
        check = false;
        for (let m = 0; m < arrTemp.length; m++) {
          if (arrTemp[m] == alphArr[i][j]) {
            check = false;
          }
        }
      }
    }

    arr.push(arrTemp);
    arrTemp = "";

    arr2.push(arrTemp2);
    arrTemp2 = 0;
  }

  arr2.forEach(element => {
    if (element > highestScore) {
      highestScore = element;
    }
  });

  for (let o = 0; o < arr2.length; o++) {
    if (arr2[o] == highestScore) {
      return alphArr[o];
    }
  }
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
