
// Competencies: Loopings
/*
=========
MATH WHIZ
=========

Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan
 looping (boleh dengan while atau for)

1. Disediakan variable initialNumber dan variable decrement. 
Dengan menggunakan looping, nilai initialNumber akan 
dikurangi terus menerus dengan nilai decrement, dan berhenti 
jika nilai initialNumber telah mencapai 0 atau minus. 
Setelah looping selesai, tampilkan nilai initialNumber saat ini!

2. Disediakan variable height. Buatlah sebuah piramid angka 
dengan pola berikut:

contoh 1 (height = 3):
  3
 333
33333

contoh 2 (height = 5):
    5
   555
  55555
 5555555
555555555
 
contoh 3 (height = 1):
1

tinggi piramid sesuai dengan nilai variable height, dan 
isi dari piramid adalah angka dari height itu sendiri.

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE 1 (Code Sample)
var initialNumber = 9; // isi dengan nilai awal
var decrement = 6; // isi dengan nilai decrement

while (initialNumber > 0) {
  initialNumber = initialNumber - decrement;
}

// console.log(initialNumber)

// Buat code disini untuk part 1.

// SKELETON CODE 2 (Code Sample)
var height=3; // isi dengan nilai tinggi piramid

// Buat code disini untuk part 2.
//Soal 2
for (var i = 1; i <= height; i++) {
  var x = "";
  for (var j=height; j > i; j--) {
      x  +=  " "
  }

  for (var k=i*2-1; k > 0 ; k --) {
    x += height;
  }
  console.log(x)
}

// halfpyramid
// function createPyramid(rows)
// {
// for(var i=0;i<rows;i++) {
// var output="";
//     for(var j=0;j<rows-i;j++) {
//         output+=" ";
//     }
//     for(var k=0;k<=i;k++) {    
//       output += rows;
//     }
//     console.log(output);  
// }  
// }
// createPyramid('5')
