
/**

  Diberikan sebuah function perpangkatanDuaRecursive(angka) yang menerima satu parameter
  berupa angka. Function akan me-return true jika angka tersebut merupakan hasil dari dua pangkat n.
  Jika tidak, return -1.

  Contoh 1:
  --------
  input: 16
  output: true
  Penjelasan:
    karena 2 * 2 * 2 * 2 adalah 16, maka function akan me-return true

  Contoh 2:
  ---------
  input: 17
  output: false
  Penjelasan:
    karena 17 bukan merupakan hasil perpangkatan angka 2, maka function akan me-return false

  RULES:
    - Wajib menggunakan metode rekursif
    - Dilarang menambahkan parameter baru
    - Dilarang membuat variable di luar function perpangkatanDuaRecursive
    - Dilarang mengubah tipe data parameter saat memanggil function/diri sendiri
    - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif
**/

function perpangkatanDuaRecursive(angka) {
  if (angka === 1) {
    return true;
  }
  else if (angka % 2 !== 0) {
    return false;
  }
  else {
    return perpangkatanDuaRecursive(angka/2);
  }
}

// TEST CASES
console.log(perpangkatanDuaRecursive(64)); // true
console.log(perpangkatanDuaRecursive(22)); // false
console.log(perpangkatanDuaRecursive(16)); // true
console.log(perpangkatanDuaRecursive(222)); // false
console.log(perpangkatanDuaRecursive(1)); // true
