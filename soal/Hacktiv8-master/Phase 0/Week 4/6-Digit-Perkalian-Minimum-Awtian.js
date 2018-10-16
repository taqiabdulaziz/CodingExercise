function digitPerkalianMinimum(angka) {
  // you can only write your code here!
var lowest = angka+2;

for (var i = 1; i < angka; i ++) {
    if (angka%i === 0) {
      var faktor = i;
      var faktor2 = angka/faktor;
      var digits = faktor.toString() + faktor2.toString();
      if (digits.length < lowest) {
        lowest = digits.length
      }
    }
}
return lowest;
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2 (6*4)
console.log(digitPerkalianMinimum(90)); // 3 (9*10)
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1802398091283)); // 2