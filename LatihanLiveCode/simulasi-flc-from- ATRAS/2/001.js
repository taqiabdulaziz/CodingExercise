/*eslint-disable*/
/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )

*/

function missingNumbers(numbers) {
  var largest = 0;
  var lowest = null;
  var num = [];
  var check = false;

  if (numbers.length == 0) {
    return []
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  for (let j = 0; j < numbers.length; j++) {
    if (lowest == null) {
      lowest = numbers[j];
    }

    if (numbers[j] < lowest) {
      lowest = numbers[j];
    }
  }

  for (let k = lowest; k <= largest; k++) {
    for (let l = 0; l < numbers.length; l++) {
      if (k == numbers[l]) {
        check = true
      }
      
    }

    if (check == false) {
      num.push(k)
    }

    check = false
    
  }
  return num
  
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
