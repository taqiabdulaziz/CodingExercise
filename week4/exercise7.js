function digitPerkalianMinimum(angka) {
  var arr = [];

  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka; j++) {
      if (i * j == angka) {
        arr.push(i + "" + j);
      }
    }
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[0].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
