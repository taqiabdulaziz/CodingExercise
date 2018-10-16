/*

================
Initial Grouping
================

Nama: Awtian Akbar 🐼

[INSTRUCTION]

Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
array dua dimensi.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ 'Budi', 'Badu' ],
[ 'Joni', 'Jono' ],
]

Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut menjadi:

[
[ 'B', 'Budi', 'Badu' ],
[ 'J', 'Joni', 'Jono' ],
]

Kamu tidak perlu peduli dengan urutan alphabet atau nama siapa yang keluar terlebih dahulu!

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/* LoGic 
buat 2 array yang akan digunakan untuk menyimpan data
array pertama berfungsi sebagai daftar huruf unik untuk di cek indexof nya
jika belum ada maka akan dibuatkan array dalam array, memasukkan huruf pertama dan kata katanya
jika sudah ada maka kata akan di push ke array dalam array di index yang sudah ada
hasilnya akan ada pada array dalam array pada jawaban
*/

function initialGrouping(studentsArr) {
  
    // Only Code Here
    let hurufUnik = [];
    let jawaban = [];
    for (let i = 0; i < studentsArr.length; i++) {
      const element = studentsArr[i];
      const elementIndex = hurufUnik.indexOf(element[0])
      if (hurufUnik.indexOf(element[0]) === -1) {
        hurufUnik.push(element[0]);
        var temp = []
        temp.push(element[0]);
        temp.push(element);
        jawaban.push(temp);
      }
      else {
        jawaban[elementIndex].push(element);
      }
    }
  
    return jawaban;
  
  }
  
  console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
  /*
  [
    [ 'B', 'Budi', 'Badu' ],
    [ 'J', 'Joni', 'Jono' ]
  ]
  */
  
  console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
  /*
  [
    [ 'M', 'Mickey' ],
    [ 'Y', 'Yusuf' ],
    [ 'D', 'Donald' ],
    [ 'A', 'Ali' ],
    [ 'G', 'Gong' ]
  ]
  */
  
  console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
  /*
  [
    [ 'R', 'Rock', 'Rocker' ],
    [ 'S', 'Stone', 'Sticker' ],
    [ 'B', 'Brick' ]
  ]
  */
  

  