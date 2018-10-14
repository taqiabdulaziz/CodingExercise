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

// function profitCalculator(buyer) {
//   //stock sugar and kopi
//   let stock = [30, 30]

//   //list menu, sugar, kopi, harga
//   let listMenu = [
//     ['Coldbrew', 2, 2, 30000],
//     ['Coffeenyaa', 1, 3, 50000],
//     ['Javachino', 3, 1, 40000]
//   ];
  
//   // you can only write your code here!
//   var hasil = [];
//   var pembelian = {};
//   var stockGula = stock[0];
//   var stockKopi = stock[1];
//   // console.log(listMenu[0][1]*buyer[0].amount);
  
//   for (let i = 0; i < buyer.length; i++) {    
//     if (buyer[i].menu === listMenu[0][0]) {
//       if (stockGula > listMenu[0][1]*buyer[i].amount && stockKopi > listMenu[0][2]*buyer[i].amount) {
//         pembelian = {menu: buyer[i].menu, time: buyer[i].waktu, profit: buyer[i].amount*listMenu[0][3], total: buyer[i].amount}
//         stockGula = stockGula - listMenu[0][1]*buyer[i].amount;
//         stockKopi = stockKopi - listMenu[0][2]*buyer[i].amount;
//         hasil.push(pembelian);
//       }
//     }
//     if (buyer[i].menu === listMenu[1][0]) {
//       if (stockGula > listMenu[1][1]*buyer[i].amount && stockKopi > listMenu[1][2]*buyer[i].amount) {
//         pembelian = {menu: buyer[i].menu, time: buyer[i].waktu, profit: buyer[i].amount*listMenu[1][3], total: buyer[i].amount}
//         stockGula = stockGula - listMenu[1][1]*buyer[i].amount;
//         stockKopi = stockKopi - listMenu[1][2]*buyer[i].amount;
//         hasil.push(pembelian);
//       }
//     }
//     if (buyer[i].menu === listMenu[2][0]) {
//       if (stockGula > listMenu[2][1]*buyer[i].amount && stockKopi > listMenu[2][2]*buyer[i].amount) {
//         pembelian = {menu: buyer[i].menu, time: buyer[i].waktu, profit: buyer[i].amount*listMenu[2][3], total: buyer[i].amount}
//         stockGula = stockGula - listMenu[2][1]*buyer[i].amount;
//         stockKopi = stockKopi - listMenu[2][2]*buyer[i].amount;
//         hasil.push(pembelian);
//       }
//     }
//   }
//   return hasil;
// }
function profitCalculator(buyer) {
  //stock sugar and kopi
  let stock = [30, 30]

  //list menu, sugar, kopi, harga
  let listMenu = [
    ['Coldbrew', 2, 2, 30000],
    ['Coffeenyaa', 1, 3, 50000],
    ['Javachino', 3, 1, 40000]
  ];  
  // you can only write your code here!
  var stockGula = stock[0];
  var stockKopi = stock[1];
  var hasil = [];

  for (let i = 0; i < listMenu.length; i++) {
    if (buyer.length > 0) {
      hasil.push({menu: listMenu[i][0], time: [], profit: 0, total: 0});
    }
  }
  for (let i = 0; i < buyer.length; i++) {
    if (buyer[i].menu === listMenu[0][0]) {
      if (stockGula > listMenu[0][1]*buyer[i].amount && stockKopi > listMenu[0][2]*buyer[i].amount) {
        stockGula -= listMenu[0][1];
        stockKopi -= listMenu[0][2];
        hasil[0].time.push(buyer[i].waktu);
        hasil[0].profit += buyer[i].amount*listMenu[0][3];
        hasil[0].total += buyer[i].amount;
      }
    }
    else if (buyer[i].menu === listMenu[1][0]) {
      if (stockGula > listMenu[1][1]*buyer[i].amount && stockKopi > listMenu[1][2]*buyer[i].amount) {
        stockGula -= listMenu[1][1];
        stockKopi -= listMenu[1][2];
        hasil[1].time.push(buyer[i].waktu);
        hasil[1].profit += buyer[i].amount*listMenu[1][3];
        hasil[1].total += buyer[i].amount;
      }
    }
    else if (buyer[i].menu === listMenu[2][0]) {
      if (stockGula > listMenu[2][1]*buyer[i].amount && stockKopi > listMenu[2][2]*buyer[i].amount) {
        stockGula -= listMenu[2][1];
        stockKopi -= listMenu[2][2];
        hasil[2].time.push(buyer[i].waktu);
        hasil[2].profit += buyer[i].amount*listMenu[0][3];
        hasil[2].total += buyer[i].amount;
      }
    }  
  }
  // console.log(buyer[0].time);
  
  return hasil;
}

// TEST CASES
console.log(profitCalculator([{waktu: '08:00', menu: 'Coldbrew', amount: 2}, {waktu: '09:00', menu: 'Coffeenyaa', amount: 5}, {waktu: '15:00', menu: 'Javachino', amount: 2}]));
// [ { menu: 'Coldbrew', time: [ '08:00' ], profit: 60000, total: 2 },
//   { menu: 'Coffeenyaa', time: [ '09:00' ], profit: 250000, total: 5 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 80000, total: 2 } ]

console.log(profitCalculator([{waktu: '08:00', menu: 'Coldbrew', amount: 3}, {waktu: '09:00', menu: 'Coldbrew', amount: 5}, {waktu: '10;00', menu: 'Coffeenyaa', amount: 1}, {waktu: '12:00', menu: 'Coffeenyaa', amount: 10}, {waktu: '15:00', menu: 'Javachino', amount: 1}]));
// [ { menu: 'Coldbrew', time: [ '08:00', '09:00' ], profit: 240000, total: 8 },
//   { menu: 'Coffeenyaa', time: [ '10;00' ], profit: 50000, total: 1 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 40000, total: 1 } ]

console.log(profitCalculator([{waktu: '14:00', menu: 'Coffeenyaa', amount: 100}]));
// [ { menu: 'Coldbrew', time: [], profit: 0, total: 0 },
//   { menu: 'Coffeenyaa', time: [], profit: 0, total: 0 },
//   { menu: 'Javachino', time: [], profit: 0, total: 0 } ]

console.log(profitCalculator([]));
//[]
