/*eslint-disable*/
/*
TOKO KOPINYAA

Toko Kopinyaa adalah kedai kopi yang melayani pelanggannya sesuai menu andalan yang dimilikinya.
Adapun menu yang tersedia di kedai kopinyaa adalah:
Coldbrew, Coffeenyaa, Javachino

Menu di atas harus menggunakan recipe andalan rahasiannya, sebagai berikut (ssst ini rahasia ya):
<menu: recipe1, recipe2, harga>

Coldbrew: 2 sugar, 2 kopi, 30000
Coffeenyaa: 1 sugar, 3 kopi, 5000
Javachino: 3 sugar, 1 kopi, 40000

setiap harinya, tokoKopinya selalu re-stock bahannya:
15 sugar dan 15 kopi

Kita diminta untuk membuat aplikasi laporan penjualannya setiap bulannya

Function akan menerima array yang berisikan object pembeli (waktu pembelian, menu yang ingin dibeli dan jumlah menu yang dibelinya). 
Jika stock recipe kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli menu tersebut.

Function profitCalculator akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek menu dari toko Kopinyaa:
info nama menu,
waktu pembelian,
total profit

Code
*/

function profitCalculator(buyer) {
  var daftarMenu = ["Coldbrew", "Coffeenyaa", "Javachino"];
  var JSON = [];

  for (let i = 0; i < buyer.length; i++) {
    JSON[i] = {
      menu: daftarMenu[i],
      time: calculateTime(daftarMenu[i]),
      profit: calculateProfit(daftarMenu[i]),
      amount: calculateAmount(daftarMenu[i])
    };
  }

  function calculateProfit(params) {
    var profit = 0;

    for (let k = 0; k < buyer.length; k++) {
      if (buyer[k].menu == params) {
        profit = buyer[k].amount * 30000;
      }
    }

    return profit;
  }

  function calculateAmount(params) {
    var amount = 0;
    for (let l = 0; l < buyer.length; l++) {
      if (buyer[l].menu == params) {
        amount += buyer[l].amount;
      }
    }

    return amount;
  }

  function calculateTime(params) {
    var waktu = [];

    for (let j = 0; j < buyer.length; j++) {
      if (buyer[j].menu == params) {
        waktu.push(buyer[j].waktu);
      }
    }

    return waktu;
  }

  return JSON;
}

// TEST CASES
console.log(
  profitCalculator([
    { waktu: "08:00", menu: "Coldbrew", amount: 2 },
    { waktu: "09:00", menu: "Coffeenyaa", amount: 5 },
    { waktu: "15:00", menu: "Javachino", amount: 2 }
  ])
);
// [ { menu: 'Coldbrew', time: [ '08:00' ], profit: 60000, total: 2 },
//   { menu: 'Coffeenyaa', time: [ '09:00' ], profit: 250000, total: 5 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 80000, total: 2 } ]

console.log(
  profitCalculator([
    { waktu: "08:00", menu: "Coldbrew", amount: 3 },
    { waktu: "09:00", menu: "Coldbrew", amount: 5 },
    { waktu: "10;00", menu: "Coffeenyaa", amount: 1 },
    { waktu: "12:00", menu: "Coffeenyaa", amount: 10 },
    { waktu: "15:00", menu: "Javachino", amount: 1 }
  ])
);
// [ { menu: 'Coldbrew', time: [ '08:00', '09:00' ], profit: 240000, total: 8 },
//   { menu: 'Coffeenyaa', time: [ '10;00' ], profit: 50000, total: 1 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 40000, total: 1 } ]

console.log(
  profitCalculator([{ waktu: "14:00", menu: "Coffeenyaa", amount: 100 }])
);
// [ { menu: 'Coldbrew', time: [], profit: 0, total: 0 },
//   { menu: 'Coffeenyaa', time: [], profit: 0, total: 0 },
//   { menu: 'Javachino', time: [], profit: 0, total: 0 } ]

console.log(profitCalculator([]));
//[]
