/*eslint-disable*/
/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating(penumpang) {
  var classes = [];
  var check;
  var result = {};

  //MAPPING GERBONG CLASS
  for (let i = 0; i < penumpang.length; i++) {
    check = false;
    for (let j = 0; j < classes.length; j++) {
      if (penumpang[i].gerbong == classes[j]) {
        check = true;
        break;
      }
    }

    if (check == false) {
      classes.push(penumpang[i].gerbong);
    }
  }

  for (let j = 0; j < classes.length; j++) {
    result[classes[j]] = [];
  }

  for (let k = 0; k < classes.length; k++) {
    for (let l = 0; l < penumpang.length; l++) {
      if (penumpang[l].gerbong == classes[k]) {
        result[classes[k]].push(penumpang[l]);
      }
    }
  }

  return result;
}

console.log(
  trainSeating([
    { nama: "Awtian", gerbong: "VVIP", seat: "A1" },
    { nama: "Klonoa", gerbong: "VIP", seat: "V1" },
    { nama: "Azizy", gerbong: "VVIP", seat: "A2" },
    { nama: "Crash", gerbong: "Regular", seat: "R1" },
    { nama: "Sena", gerbong: "Regular", seat: "R3" },
    { nama: "Retsu", gerbong: "VIP", seat: "V2" },
    { nama: "Hiruma", gerbong: "VVIP", seat: "A666" },
    { nama: "Tsubasa", gerbong: "VIP", seat: "V6" }
  ])
);

/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
