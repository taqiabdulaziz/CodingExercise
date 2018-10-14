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
1. buat var hasil
2. buat looping ntuk mengecek apakah angka tersebut ganjil/ genap
3. jika genap maka tambahkan input kedalam hasil
4. jika ganjil maka cek nilai input selanjut nya, jika terdapat ganjil lagi maka masukan nilai input dan '-' ke hasil
5. tampilkan hasil
*/

function tambahDash(str) {
  var string = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) % 2 == 1 && str.charAt(i+1) % 2 == 1) {
      string+=str.charAt(i) + "-"
    } else {
      string+=str.charAt(i)
    }
  }
  return string
}

console.log(tambahDash("454793")); // '4547-9-3'
console.log(tambahDash("1739028")); // '1-7-3-9028'
console.log(tambahDash("891829")); // '89-1829'
console.log(tambahDash("10192")); // '101-92'
console.log(tambahDash("222222")); // '222222'
