/*eslint-disable*/
/*
==================
PASSWORD GENERATOR
==================

Nama: Awtian Akbar 🐼

[INSTRUCTIONS]

passGen adalah sebuah function yang menerima tiga parameter berupa firstName, email, dan age.
Function akan mengambil bagian-bagian dari ketiga parameter menjadi satu kesatuan string baru,
dengan ketentuan:

output: [3 huruf pertama dari firstName][Semua huruf sebelum simbol @ di email][age]

Jika firstName dibawah 3 huruf, hentikan function dan kembalikan string berupa 'NAME IS INVALID!'

[CONSTRAINTS]
Dilarang menggunakan sintaks .split(), .slice(), .splice(), .join(), .push(), dan .concat().
Soal ini hanya membutuhkan operasi string (mengakses index dari string tentunya diperbolehkan)!
Dilarang menggunakan segala bentuk regex (match, test, dan lain-lain)


[EXAMPLE]
passGen('john', 'hello@john.com', 25)

proses:

- 3 huruf pertama dari firstName: 'joh'
- semua huruf sebelum simbol @ di email: 'hello'
- age: 25

output: 'johhello25'

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function passGen(firstName, email, age) {
  var result = "";
  if (firstName.length == 1) {
    return "NAME IS INVALID";
  }

  for (let i = 0; i < firstName.length; i++) {
    if (i < 3) {
      result += firstName.charAt(i);
    }
  }

  for (let j = 1; j < email.length; j++) {
    if (email.charAt(j) != "@") {
      result += email.charAt(j - 1);
    } else {
      result += email.charAt(j - 1);
      break;
    }
  }

  result+=age

  return result;
}

console.log(passGen("john", "hello@gmail.com", 15)); // 'johhello15'
console.log(passGen("mickey", "mike@gmail.com", 1)); // 'micmike1'
console.log(passGen("a", "hello@gmail.com", 15)); // 'NAME IS INVALID!'
console.log(passGen("rudy", "rud@rudy.co.id", 22)); // 'rudrud22'
console.log(passGen("bejo", "zetta@bejo.gov", 50)); // 'bejzetta50'
