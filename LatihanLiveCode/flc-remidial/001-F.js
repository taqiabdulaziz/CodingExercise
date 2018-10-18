/*eslint-disable*/
/*
  SUM ARRAY ODD EVEN
  ==================

  function sumArrayOddEven adalah sebuah function yang menerima 1 parameter berupa array multi dimensi.
  function ini akan menjumlah bilangan dengan syarat sebagai berikut:
  - jika dia berada pada index ganjil, maka dia akan mencari bilangan TERBESAR
  - jika dia berada pada index genap, maka dia akan mencari bilangan TERKECIL

  function ini akan me-return hasil penjumlahan dari ketentuan di atas

  example:
  input [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

  proses:
  pada array index 0: bilangan TERBESAR dari [1, 2, 3, 4] = 4
  pada array index 1: bilangan TERKECIL dari [5, 6, 7, 8] = 5
  pada array index 2: bilangan TERBESAR dari [9, 10, 11, 12] = 12

  total permasing-masing index: 4 + 5 + 12 = 21

  output: 21

*/

function sumArrayOddEven(array) {
  var result = 0;
  //SORT ARRAY DOLOOO
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      for (let k = 0; k < array[i].length; k++) {
        if (array[i][j] >= array[i][j + 1]) {
          var a = array[i][j + 1];
          array[i][j + 1] = array[i][j];
          array[i][j] = a;
        }
      }
    }
  }

  for (let m = 0; m < array.length; m++) {
    if (m % 2 == 0) {
      result += array[m][array[m].length-1];
    } else if (m % 2 != 0) {
      result += array[m][0]
    }
  }

  return result;
}

console.log(sumArrayOddEven([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // 21
console.log(sumArrayOddEven([[1, 2], [6, 7], [9, 10], [3, 4], [7, 5]])); // 28
console.log(sumArrayOddEven([[1], [1], [1], [1], [1], [1]])); // 6
console.log(
  sumArrayOddEven([
    [12, 67, 32, 35],
    [23, 33, 34],
    [12],
    [12, 43, 54, 67],
    [3],
    [34, 55, 67]
  ])
); // 151
console.log(sumArrayOddEven([])); // 0
