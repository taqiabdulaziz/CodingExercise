/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat genap    
*/

function ganjilGenapAsianGames ( date, data ) {
  // Your code here

}


console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 24 WE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 XOXO',
  type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [
  {
    plat: 'A 2431 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87112 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Motor'
  }
])) // 0

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates



  // if(date % 2 === 0){
  //   for(let i = 0; i < data.length; i++){
  //     if(data[i].type === 'Mobil'){
  //       arrtemp.push(data[i].plat)
  //     }
  //   }

  //   for(let i = 0; i < arrtemp.length; i++){
  //     var a = ''
  //     for(let j = 0; j < arrtemp[i].length; j++){
  //       if(arrtemp[i][j] === '1' || arrtemp[i][j] === '2' || arrtemp[i][j] === '3' || arrtemp[i][j] === '4' || arrtemp[i][j] === '5' || arrtemp[i][j] === '6' || arrtemp[i][j] === '7' ||arrtemp[i][j] === '8' || arrtemp[i][j] === '9' || arrtemp[i][j] === '10'){
  //         a += arrtemp[i][j]
  //       }
  //     }
  //     number.push(Number(a))
  //     if(a % 2 === 0){
  //       counter ++
  //     }
  //   }
  // }
  // if(date % 2 !== 0){
  //   // var arrtemp = []
  //   for(let i = 0; i < data.length; i++){
  //     if(data[i].type === 'Mobil'){
  //       arrtemp.push(data[i].plat)
  //     }
  //   }
  //   // var number = []
  //   for(let i = 0; i < arrtemp.length; i++){
  //     var a = ''
  //     for(let j = 0; j < arrtemp[i].length; j++){
  //       if(arrtemp[i][j] === '1' || arrtemp[i][j] === '2' || arrtemp[i][j] === '3' || arrtemp[i][j] === '4' || arrtemp[i][j] === '5' || arrtemp[i][j] === '6' || arrtemp[i][j] === '7' ||arrtemp[i][j] === '8' || arrtemp[i][j] === '9' || arrtemp[i][j] === '10'){
  //         a += arrtemp[i][j]
  //       }
  //     }
  //     number.push(Number(a))
  //     if(a % 2 !== 0){
  //       counter ++
  //     }
  //   }
  // }