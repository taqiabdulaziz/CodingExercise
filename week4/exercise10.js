function checkAB(str) {
  str.toLowerCase();
  var arrA = [];
  var arrB = [];
  var charA = str.indexOf("a");
  var charB = str.indexOf("b");
  var start = 0;
  var counter = 0;
  var check = false;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a") {
      arrA.push(i);
    } else if (str.charAt(i) == "b") {
      arrB.push(i);
    }
  }

  for (let j = 0; j < arrA.length; j++) {
    for (let k = 0; k < arrB.length; k++) {
      if (Math.abs(arrA[j] - arrB[k]) - 1 == 3) {
        check = true;
      }
    }
  }

  return check;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
