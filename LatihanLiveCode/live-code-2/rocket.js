/**
  **************
  HALF TRIANGLE
  **************

  Diberikan sebuah function halfTriangle yang memiliki dua paramter yaitu:
   - height bertipe number
   - direction bertipe string

  Function ini akan mengembalikan array multidimensi height * height dimana array
  tersebut berisi angka berbentuk segitiga dan setengahnya lagi spasi berbentuk segitiga (jika dilihat kasat mata)
  sesuai dengan parameter direction.

  Untuk pola bisa dilihat pada test case

  NOTE:
  - HEIGHT MINIMUM ADALAH 4, JIKA KURANG DARI 4 MAKA RETURN `Minimum height is 4`

**/
function halfTriangle(height, direction) {
  // your code here
}

console.log(halfTriangle(5, 'up'));
// [ [ '1', '2', '3', '4', '5' ],
//   [ ' ', '2', '3', '4', '5' ],
//   [ ' ', ' ', '3', '4', '5' ],
//   [ ' ', ' ', ' ', '4', '5' ],
//   [ ' ', ' ', ' ', ' ', '5' ] ]

console.log(halfTriangle(7, 'down'));
// [ [ '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', '3', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', '3', '4', ' ', ' ', ' ' ],
//   [ '1', '2', '3', '4', '5', ' ', ' ' ],
//   [ '1', '2', '3', '4', '5', '6', ' ' ],
//   [ '1', '2', '3', '4', '5', '6', '7' ] ]

console.log(halfTriangle(3, 'up')); // Minimum height is 4

console.log(halfTriangle(4, 'up'));
// [ [ '1', '2', '3', '4' ],
//   [ ' ', '2', '3', '4' ],
//   [ ' ', ' ', '3', '4' ],
//   [ ' ', ' ', ' ', '4' ] ]

console.log(halfTriangle(4, 'down'));
// [ [ '1', ' ', ' ', ' ' ],
//   [ '1', '2', ' ', ' ' ],
//   [ '1', '2', '3', ' ' ],
//   [ '1', '2', '3', '4' ] ]
