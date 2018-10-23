/*eslint-disable*/
/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

/*



*/


function formatUang(number) {
  var numStr = String(number)
  var result = []
  var counter = 0

  for (let i = numStr.length-1; i >= 0; i--) {
    if (counter == 3) {
      result.unshift(".")
      result.unshift(numStr[i])
      counter = 0
    } else {
      counter++
      result.unshift(numStr[i])
    }
    
  }

  return "Rp"+result.join("")

}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
console.log(formatUang(13500)); // Rp4.999.999,00
