/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS)
  Contoh 1:
  ==========
  input: 3
  output:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]

  Contoh 2:
  ==========
  input: 4
  output:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]


NOTE & RULES:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
 - DILARANG MENGGUNAKAN BUILT-IN-FUNCTION JS SELAIN .push(), .unshift(), .shift(), .pop()
 - DILARANG MENGGUNAKAN SPREAD SYNTAX

**/


function squareNumber(num) {
  var hasil = [];
  var j = 1;
  if (num < 3) {
    return 'Minimal input adalah 3';
  }
  for (let i = 0; i < num; i++) {
    hasil.push([]);
    while (hasil[i].length < num) {
      if (i % 2 == 0) {
        hasil[i].push(j)
      }
      else {
        hasil[i].unshift(j)
      }
      j++;
    }
  }
  return hasil
}

console.log(squareNumber(3));
// [ [ 1, 2, 3 ], [ 6, 5, 4 ], [ 7, 8, 9 ] ]

console.log(squareNumber(4));
// [ [ 1, 2, 3, 4 ],
//   [ 8, 7, 6, 5 ],
//   [ 9, 10, 11, 12 ],
//   [ 16, 15, 14, 13 ] ]

console.log(squareNumber(5));
// [ [ 1, 2, 3, 4, 5 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 21, 22, 23, 24, 25 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
