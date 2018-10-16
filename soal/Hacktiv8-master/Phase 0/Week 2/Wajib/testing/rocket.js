// Competency: Function + Looping + Conditional
/*

Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.

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
//code goes here!
    for (var i = 1; i <= row; i ++) {
        var output = "";
        if (i%2!==0) {
            for (var k = 1 ; k <= i; k++){
                 output += `x`;
            }
        }
        else {
            for (var j = 1 ; j <= i; j++){
                output += `o`;
            }
        }

    }



}

console.log(drawLadder(3))
console.log(drawLadder(6))
//Rocket
