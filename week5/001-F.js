/*eslint-disable*/
//---001

/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/

//ALGORITMA
// PERTAMA PROGRAM AKAN MENGECEK HURUF PERTAMA DARI PARAMETER 'str' APAKAH DIA BERTIPE ANGKA
// YANG ADA DIDALAM VARIABLE 'num' KALO ADA BERARTI DIA AKAN MENGAMBIL INDEX DARI
// VARIABLE 'num' TERSEBUT DAN DISAMAKAN DIDALAM VARIABEL 'ALPH' (CONVERT MENJADI HURUF VOKAL) DAN MEMBENTUK VARIABLE 'string' dengan 'string+= ..', KALO TIDAK ADA DIDALAM VARIABEL NUM TERSEBUT DIA AKAN MENAMBAH VARIABEL
// 'counter', JIKA COUNTER SUDAH MENCAPAI ANGKA 5 MAKA DIA AKAN MEMBENTUK MEMBENTUK VARIABLE 'string' dengan 'string+= ..', KALAU DIA MEMBENTUK VAR 'string' sebelum var Counter BELUM MENCAPAI 5 MAKA NANTI AKAN ADA KARAKTER YANG DUPLIKAT SEPERTI "DDDIIIMIIITRII ..."

function numberLetters(str) {
  var alph = "aiueo";
  var num = "41730";
  var string = "";

  for (let i = 0; i < str.length; i++) {
    var counter = 0;

    // for (let l = 0; l < alph.length; l++) {
    //     if (str.charAt(i)==alph.charAt(l)) {
    //         string+=str.charAt(i)
    //     } break;

    // }

    for (let j = 0; j < num.length; j++) {
      if (str.charAt(i) == num.charAt(j)) {
        string += alph.charAt(j);
      } else if (str.charAt(i) != num.charAt(j)) {
        counter++;
        if (counter == 5) {
          string += str.charAt(i);
        }
      }
    }
  }

  return string;
}

// Test cases
console.log(numberLetters("d1m1tr1w4hy7d1p7tr4")); // dimitriwahyudiputra
console.log(numberLetters("s3rg31dr4g7n0v")); // sergeidragunov
console.log(numberLetters("j1nk4z4m4")); // jinkazama
console.log(numberLetters("s7m3t4l")); // sumetal
console.log(numberLetters("m04m3t4l")); // moametal
console.log(numberLetters("")); //
