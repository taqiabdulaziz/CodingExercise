/*

===================================
Recursive Mastery : Number Iterator
===================================

Nama: Awtian Akbar 🐼

[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.

[EXAMPLE]
input: 5
output: 012345

input: 7
output: 01234567

[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/

const numberIterator = num => num === 0 ? num : numberIterator(num-1) + num.toString();

console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'