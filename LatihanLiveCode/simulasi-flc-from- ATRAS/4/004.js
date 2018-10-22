/*eslint-disable*/
/*
=================================
Array Mastery: Number Cruncher EX
=================================
Name Here :_____________
Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
berupa angka, dan mengembalikan array baru yang merupakan hasil penambahan angka di
index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
angka di kiri atau kanan, maka dianggap sebagai 0. Kemudian, dari setiap nilai di dalam array tersebut,
ambil yang nilainya ganjil, kemudian tambahkan semua nilai ganjil tersebut dan return nilai total ganjilnya.
Ex :
Input: [ 2 , 5 , 1 , 3 ]
Proses:
=> [ 0 + 2 + 5 , 2 + 5 + 1, 5 + 1 + 3, 1 + 3 + 0 ]
=> [ 7, 8, 9, 4 ]
=> nilai ganjil: 7 dan 9
=> 7 + 9
Output: 16
Input: [2, 3, 1, 4, 1, 5, 0, 3]
Proses:
=> [ 5, 6, 8, 6, 10, 6, 8, 3 ]
=> nilai ganjil: 5 dan 3
=> 5 + 3
Output: 8
Input: [3, 6, 8, 9, 1, 2, 3]
Proses:
=> [ 9, 17, 23, 18, 12, 6, 5 ]
=> nilai ganjil: 9, 17, 23, 5
=> 9 + 17 + 23 + 5
Output: 54
*/

function numberCruncherEx(numberArr) {
  var arr = [];
  var counter = 0

  if (numberArr.length % 2 == 0) {
    for (let i = 0; i < numberArr.length; i++) {
      if (i == 0) {
        arr.push(0 + numberArr[i] + numberArr[i + 1]);
      } else if (i == numberArr.length - 1) {
        arr.push(numberArr[i - 1] + numberArr[i] + 0);
      } else {
        arr.push(numberArr[i - 1] + numberArr[i] + numberArr[i + 1]);
      }
    }
  } else if (numberArr.length % 2 == 1) {
    for (let i = 1; i < numberArr.length-1; i++) {
      arr.push(numberArr[i-1] + numberArr[i] + numberArr[i+1])
      
    }

    arr.push(0+numberArr[0]+numberArr[1])
    arr.push(numberArr[numberArr.length-1] + 0 + numberArr[numberArr.length-2])
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2== 1) {
      counter+=arr[i]
    }
    
  }
  return counter
}

console.log(numberCruncherEx([7, 1, 0, 4])); // 1
console.log(numberCruncherEx([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncherEx([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // 6
console.log(numberCruncherEx([3, 6, 8, 9, 1, 2, 3])); // 54
