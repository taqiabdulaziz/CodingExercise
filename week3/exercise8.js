/*eslint-disable*/
function pasanganTerbesar(num) {
  var numString = String(num);
  var string1 = "0";
  var string2 = 0;

  for (let i = 0; i <= numString.length; i++) {
    if (numString.charAt(i) > parseInt(string1)) {
      string1 = numString.charAt(i);
      string2 = i;
    }
  }


  //In-case kalo given number adalah 123456 dst
  if (string1 == String(num).charAt(numString.length-1)) {
      return parseInt(String(num).charAt(numString.length-2) + string1)
  } else {
    return parseInt(string1 + String(num).charAt(string2 + 1));
  }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

