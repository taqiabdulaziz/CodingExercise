/*eslint-disable*/
/*
==================================
Array Mastery: Group Odd Evens
==================================

Nama:________

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:

"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"

aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!

[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"

input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
*/

function groupOddEven(students) {
  var oddStr = "ODDS:";
  var evensStr = "EVENS:";
  var separator = " ";

  for (let i = 0; i < students.length; i++) {
    if (students[i] % 2 == 1) {
      oddStr += " " + students[i] + ",";
    } else {
      evensStr += " " + students[i] + ",";
    }
  }

  if (oddStr.length == 5) {
    oddStr = "";
    separator = "";
  } else if (evensStr.length == 6) {
    evensStr = "";
  }

  return (
    oddStr.substring(0, oddStr.length - 1) +
    separator +
    evensStr.substring(0, evensStr.length - 1)
  );
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
