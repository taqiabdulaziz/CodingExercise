// Competencies: Loopings
/*
=============
Number Ladder
=============

Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height. 
Buatlah sebuah piramid angka dengan pola berikut:

contoh 1 (height = 3):
1
12
123

contoh 2 (height = 5):
1
12
123
1234
12345
 
contoh 3 (height = 1):
1

tinggi piramid sesuai dengan nilai variable height, dan isi dari piramid adalah angka dari height itu sendiri.

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = 5; // isi dengan nilai tinggi piramid

// Buat code disini
var temp;
for (var i = 1; i <= height; i++) {
    temp = ""
    for (var j = 1; j <= i; j++) {
        temp = temp + j
    }
    console.log(temp)
}