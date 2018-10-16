// Competencies: Functions
/*

Instruksi
=========
Buatlah beberapa function berikut:

1. multiplication, yang menerima dua parameter berupa num1 
dan num2. Function tersebut akan mengalikan dua angka dan 
mereturn hasil perkaliannya.
  contoh
  ------
  input: multiplication(3, 6)
  output: 18

2. powerMe, yang menerima dua parameter berupa num1 dan num2. 
Function tersebut akan memangkatkan num1 dengan num2 
(num1 ^ num2) dan mereturn hasil perpangkatannya.
  contoh
  ------
  input: powerMe(2, 3)
  output: 8

3. mergeStrings, yang menerima empat parameter berupa str1, 
str2, str3, dan str4. Function akan menggabungkan keempat 
string tersebut dengan simbol - sebagai pemisah.
  contoh
  -----
  input: mergeStrings('hello', 'world', 'nice', 'day')
  output: 'hello-world-nice-day'
*/

function multiplication (num1, num2) {
//your code goes here
return num1 * num2
}

console.log(multiplication(3, 6));
console.log(multiplication(2, 4));

function powerMe(num1, num2) {
//your code goes here
return Math.pow(num1,num2)
}

console.log(powerMe(2, 3));
console.log(powerMe(2, 4));

function mergeStrings(str1, str2, str3, str4) {
//your code goes here
return `${str1}-${str2}-${str3}-${str4}`
}

console.log(mergeStrings('hello','world','nice','day'));
console.log(mergeStrings('welcome','to','javascript','!'));

//Soal 3
