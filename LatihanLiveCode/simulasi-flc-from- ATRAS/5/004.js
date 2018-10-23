/*eslint-disable*/
/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  var lowest = 0;
  var highest = 0;
  var missing = [];
  var num = "123456789";
  var check = false;

  for (let l = 0; l < arr.length; l++) {
    for (let m = 0; m < arr[l].length; m++) {
      if (lowest == 0 && arr[l][m] != " ") {
        lowest = arr[l][m];
      } else if (lowest > arr[l][m] && arr[l][m] != " ") {
        lowest = arr[l][m];
      }
    }
  }

  for (let l = 0; l < arr.length; l++) {
    for (let m = 0; m < arr[l].length; m++) {
      if (highest == 0 && arr[l][m] != " ") {
        highest = arr[l][m];
      } else if (highest < arr[l][m] && arr[l][m] != " ") {
        highest = arr[l][m];
      }
    }
  }

  for (let i = lowest; i <= highest; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        if (i == arr[j][k]) {
          check = true
        }
      }
    }
    if (missing.length == 4) {
      return missing
    }


    if (check == false) {
      missing.push(i)
    }

    check = false
  }
  if (missing.length == 0) {
    return [0]
  }
  return missing

  
}

console.log(missingNum([[3, " ", 5], [1, " ", 7], [9, " ", " "]])); // [ 2, 4, 6, 8 ]
console.log(missingNum([[2, " "], [" ", 5]])); // [ 3, 4 ]
console.log(missingNum([[11, " ", 13], [17, " ", 19], [" ", 16, " "]])); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "]
  ])
); // [ 2, 4, 6, 8 ]
console.log(missingNum([])); // []
