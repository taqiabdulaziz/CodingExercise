// Competency: Function + Looping + Conditional
/*

Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
x
oo
xxx

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo

*/

function drawLadder(row) {
// hanya code disini
var print;
for (var i = 0; i < row; i++) {
    print = "";
    if (i%2 !== 0) {
        for (var j = 0; j <= i; j++) {
        print += 'o';
        }
    } else {
        for (var k = 0; k <= i; k++) {
            print += 'x';
        }
    }
    console.log(print)
}
}

drawLadder(3);
console.log("")
drawLadder(6);

