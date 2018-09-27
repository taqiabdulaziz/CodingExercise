/*eslint-disable*/

//contoh input
var ar = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

// function dataHandling(arrString) {
//     var nomorId = ''

//     for (let i = 0; i < arrString.length; i++) {
//         for (let j = 0; j < arrString.length; j++) {
//             console.log('Nomor ID: ' + arrString[i][j])

//         }
//     }

//     return element
// }

// for (let i = 0; i < input.length; i++) {
//     console.log("Nomor ID: " + input[i][0]);
//     console.log("Nama Lengkap: " + input[i][1]);
//     console.log("TTL: " + input[i][2], input[i][3]);
//     console.log("Hobi: " + input[i][4]);
// }

for (var i=0; i<ar.length; i++) {
    // inner loop applies to sub-arrays
    for (var j=0; j<ar.length; j++) {
        // accesses each element of each sub-array in turn
        console.log( ar[i][j] ); 
    }
}

// console.log(dataHandling(input))
