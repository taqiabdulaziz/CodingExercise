/*eslint-disable*/
/**

******************************
ODD PAIR FIRST LAST RECURSIVE
******************************

Diberikan sebuah function oddPairFirstLast yang memiliki satu parameter bertipe number.
Function ini akan mengembalikan hasil penjumlahan nilai pasangan yang ganjil dimana pasangan ganjil tersebut
adalah gabungan index 0 + index terakhir, index 1 + index terakhir - 1, dst.
JIKA angka tidak memiliki pasangan MAKA dipasangkan dengan angka 1

Contoh 1:
----------
input: 2345
output: 25
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir - 1] => 34

  karena pasangan yang ganjil hanya 25 maka 25 + 0 => function akan me-return 25

Contoh 2:
---------
input: 23351
output: 87
penjelasan:
  - index[0] + index[terakhir] => 21
  - index[1] + index[terakhir-1] => 35
  - karena index[2] merupakan index[terakhir-2] (tidak memiliki pasangan)
    maka angka ini akan dipasangkan dengan angka 1 => 31

  karena pasangan ganjil adalah 21, 35 dan 31 maka 21 + 35 + 31 => function akan me-return 87

Contoh 3:
----------
input: 2335
output: 58
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir-1] => 33

  karena pasangan ganjil adalah 25 dan 33 maka 25 + 33 => function akan me-return 58



RULES
=====
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function oddPairFirstLast
  - Dilarang mengubah tipe data parameter
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif

**/

function oddPairFirstLast(num) {
  var params = num.toString();
  var last = [];
  if (num.toString().length == 1 || params.length == 1) {
    return num * 10 + 1;
  }

  if (
    Number(params[0] + params[params.length - 1]) % 2 == 1 &&
    num.length != 1
  ) {
    return (
      Number(params[0] + params[params.length - 1]) +
      oddPairFirstLast(
        Number(num.toString().slice(1, num.toString().length - 1))
      )
    );
  } else if (Number(params[0] + params[params.length - 1]) % 2 != 1) {
    return oddPairFirstLast(
      Number(num.toString().slice(1, num.toString().length - 1))
    );
  }
}

console.log(oddPairFirstLast(2345)); // 25
console.log(oddPairFirstLast(2335)); // 58
console.log(oddPairFirstLast(23351)); // 87 21 35 3
console.log(oddPairFirstLast(42548)); //51
