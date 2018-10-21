/*eslint-disable*/
/**
  **************
  FAKTOR PRIMA
  **************

  Diberikan sebuah function faktorPrima dimana menerima sebuah parameter berupa number.
  Output dari function ini adalah faktor prima dari inputan angka parameter.

  Faktor Prima adalah angka yang habis dibagi oleh angka-angka dasar bilangan prima yaitu
  2, 3, 5 dan 7 (OIYA DAN TENTU SAJA DIRINYA SENDIRI!!)

  contoh 1:
  -----------
  input: 90
  output: 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
  penjelasan:
    90
    /\
  2   45
      /\
    3   15
        /\
      3   5


  contoh 2:
  ----------
  input: 168
  output: 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
  penjelasan:
    168
    /\
  2  84
     /\
    2  42
       /\
      2  21
         /\
        3  7

  contoh 3:
  ----------
  input: 44
  output: 2 pangkat 2, 11 pangkat 1
  penjelasan:
     44
     /\
    2  22
       /\
      2  11

RULES:
  - HANYA BOLEH MENGGUNAKAN LOOPING(FOR/WHILE) DAN CONDITION(IF ELSE)
  - HANYA BOLEH MENGGUNAKAN BUILT IN FUNCTION .push() DAN/ATAU .join() (jika diperlukan)
  - TIDAK BOLEH MENGGUNAKAN FUNCTION ES6
**/

function faktorPrima(num) {
  var counter = 0;
  var primeNum = [];
  var kamus = [];
  var string = "";
  var counter = 0;

  for (let i = 2; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        counter++;
      }
    }

    if (counter == 2) {
      kamus.push(i);
    }

    counter = 0;
  }
  for (let j = 0; j < kamus.length; j++) {
    while (num % kamus[j] == 0) {
      counter++;
      num = num / kamus[j];
    }
    // if (counter == 0) {
    //   break;
    // }

    if (counter != 0) {
      string += kamus[j] + " pangkat " + counter + ", ";

      counter = 0;
    }
  }

  return string.slice(0, string.length - 2);
}

console.log(faktorPrima(90)); // 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
console.log(faktorPrima(168)); // 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
console.log(faktorPrima(44)); // 2 pangkat 2, 11 pangkat 1
console.log(faktorPrima(55)); // 5 pangkat 1, 11 pangkat 1
console.log(faktorPrima(26)); // 2 pangkat 1, 13 pangkat 1
console.log(faktorPrima(17)); // 17 pangkat 1
