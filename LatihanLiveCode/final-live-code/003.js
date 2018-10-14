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

//KERJAAN SEBELUMNYA
// function faktorPrima(num) {
//   var result = [];
//   var pembagi = 2;

//   while (pembagi <= num) {
//       if (num % pembagi === 0) {
//           num = num/pembagi;
//           result.push(pembagi);
//       }
//       else {
//           pembagi++;
//       }
//   }
//   var jumlah = 0;
//   hasil = '';
//   for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < result.length; j++) {
//       if (i === j) {
//         jumlah++;
//         break;
//       }
//     }
//     if (i != result.length) {
//       hasil += result[i] +' pangkat '+ jumlah +', '
//       jumlah = 0;
//     }
//     else if (i = i-1) {
//       hasil += result[i] +' pangkat '+ jumlah
//     }
//   }
//   return hasil;
// }

function faktorPrima(num) {
  var arr = [];
  var arrPrime = [];
  var arrTemp = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    for (let k = 1; k < arr[j]; k++) {
      if (arr[j] % k == 0) {
        arrPrime.push(k);
      }
    }
  }

  for (let k = 2; k < arrPrime.length; k++) {
    var counter = 0
    for (let l = 1; l < arrPrime[k]; l++) {
      if (arrPrime[k]%l == 0) {
        counter++
      } 
    }

    if (counter == 2) {
      arrTemp.push(k)
    }
    
  }

  

  return arrTemp;
}

console.log(faktorPrima(90)); // 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
console.log(faktorPrima(168)); // 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
console.log(faktorPrima(44)); // 2 pangkat 2, 11 pangkat 1
console.log(faktorPrima(55)); // 5 pangkat 1, 11 pangkat 1
console.log(faktorPrima(26)); // 2 pangkat 1, 13 pangkat 1
console.log(faktorPrima(17)); // 17 pangkat 1
