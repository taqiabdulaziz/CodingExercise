/*eslint-disable*/
/**
  ************
  TAMBAH DASH
  ************

  Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string.
  Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara
  dua angka ganjil di dalam string yang menjadi parameter tersebut.

  Contoh 1:
  ---------
  input: '1233897'
  output: '123-389-7'

  Contoh 2:
  ---------
  input: '1739028'
  output: '1-7-3-9028'

  RULES:
    - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
    - TIDAK BOLEH MENGGUNAKAN BUILT IN FUNCTION DAN FUNCTION ES6 APAPUN

**/

/*
PSEUDOCODE
INITIALIZE string WITH VALUE ""
FOR LOOP FROM 'i' TO (LENGTH OF 'str' SUBTRACT BY 1)
    IF CHARACTER AT i MOD 2 EQUAL TO 0 AND CHARACTER AT i-1 MOD 2 EQUAL TO 0
    THEN ADD "-" AND CHARACTER AT i
    ELSE ADD CHARACTER AT i
    END LOOP IF i IS EQUAL TO (LENGTH OF 'str' SUBTRACT BY 1)

DISPLAY string
*/

function tambahDash(str) {
  var string = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 == 1 && str[i - 1] % 2 == 1) {
      string += "-" + str[i];
    } else {
      string += str[i];
    }
  }

  return string;
}

console.log(tambahDash("454793")); // '4547-9-3'
console.log(tambahDash("1739028")); // '1-7-3-9028'
console.log(tambahDash("891829")); // '89-1829'
console.log(tambahDash("10192")); // '101-92'
console.log(tambahDash("222222")); // '222222'
