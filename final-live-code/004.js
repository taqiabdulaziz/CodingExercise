/*eslint-disable*/
/**
  TIC TAC TOE PRIME

  Diberikan sebuah function tictactoePrime dengan parameter number of array 2 dimension.
  Function ini akan menghasilkan number of array 2 dimension yang telah di convert jika
  terdapat angka prima secara berurutan sebanyak 3 kali mendatar ataupun menurun.

  Contoh:
  ---------
  input:
    [
      [2, 5, 7],
      [5, 8, 19],
      [1, 3, 23]
    ]

  output:
    [
      [X, X, X],
      [5, 8, X],
      [1, 3, X]
    ]

    NOTE:
    - Angka 1 bukanlah sebuah angka prima
    - Angka prima yang telah diconvert tetap dihitung untuk baris/kolom selanjutnya

**/

function tictactoePrime(array) {

}

console.log(tictactoePrime([
  [2, 5, 7],
  [5, 8, 19],
  [1, 3, 23]]));
/*
[
  ['X', 'X', 'X'],
  [5, 8, 'X'],
  [1, 3, 'X']
]
*/

console.log(tictactoePrime([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [13, 11, 19, 15, 16],
  [18, 17, 14, 20, 21],
  [22, 23, 24, 25, 12]]));

/*
[
  [1, 'X', 3, 4, 5],
  [6, 'X', 8, 9, 10],
  ['X', 'X', 'X', 15, 16],
  [18, 'X', 14, 20, 21],
  [22, 'X', 24, 25, 12]
]
*/
