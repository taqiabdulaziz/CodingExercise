/*eslint-disable*/
/*
==================================
Array Mastery: Second Largest
==================================
Nama:________
[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

//PSEUDOCODE
//SAYA MEMAKAI TEKNIK BUBBLE SORT (SWAP INDEX)
//IF FIRST INDEX OF ARRAY NUMBER IS LARGER THAN SECOND INDEX OF ARRAY
//  THEN MOVE SWAP POSITION THE FIRST INDEX OF ARRAY TO SECOND INDEX
// IF THE SWAPPED SECOND INDEX IS LARGER THAN THIRD INDEX
//  THEN MOVE SWAP POSITION THE SWAPPED SECOND INDEX OF ARRAY TO THIRD INDEX
//.....
// REPEAT UNTIL THE i INDEX IS NOT LARGER THAN i+1 INDEX, THAN BACK AND REPEAT TO FIRST STEP

function secondLargest(numbers) {
  var counter = 0;
  
  while (counter < numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= numbers[i + 1]) {
        var a = numbers[i + 1];
        numbers[i + 1] = numbers[i];
        numbers[i] = a;
      }
    }

    counter++;
  }

  return numbers;
}

// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313
