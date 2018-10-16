function pasanganTerbesar(num) {
  // you can only write your code here!
  var str = "";
  str = String(num);
  var arr = [];

  for (var i = 0; i < str.length-1; i++) {
    var x = str[i] + str [i+1];
    arr.push(x);
  }
  arr.sort(function(a, b){return b - a})
  return Number(arr[0])
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99



