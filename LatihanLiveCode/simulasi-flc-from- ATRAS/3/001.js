/*eslint-disable*/
/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/
function encrypt(input) {
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var H8BI = "!@#$%^&*()-+1234567890[]{}";
  var isAlph = false;
  var result = "";

  for (let i = 0; i < input.length; i++) {
    //CEK IS ALPHABET OR NOT
    for (let j = 0; j < alph.length; j++) {
      if (input[i] == alph[j]) {
        isAlph = true;
      }
    }

    if (isAlph == false) {
      result += input[i];
    } else if (isAlph == true) {
      for (let l = 0; l < alph.length; l++) {
        if (input[i] == alph[l]) {
          result += H8BI[l];
        }
      }
    }

    isAlph = false;
  }

  return result;
}

console.log(encrypt("dimitri")); // $(1(86(
console.log(encrypt("irsyah mardiah")); //(67{!* 1!6$(!*
console.log(encrypt("dimitr€€")); // $(1(86€€
console.log(encrypt("d!mas")); // $!1!7
console.log(encrypt("@wtian")); // @[8(!2
