/*eslint-disable*/
function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var JSON = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    for (let j = 0; j < arrPenumpang[i].length; j++) {
      JSON[i] = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: tarif(arrPenumpang[i][1], arrPenumpang[i][2])
      };
    }
  }

  function tarif(naik, tujuan) {
    var counterNaik = 0;
    var counterTujuan = 0;

    for (let k = 0; k < rute.length; k++) {
      if (rute[k] == naik) {
        counterNaik = k;
      }
    }

    for (let l = 0; l < rute.length; l++) {
      if (rute[l] == tujuan) {
        counterTujuan = l;
      }
    }

    return (counterTujuan - counterNaik) * 2000;
  }

  return JSON;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
