/*eslint-disable*/
/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
*/

function evenPairsSum(str) {
  var arr = [];
  var string = "";
  var num = 0;

  for (let i = 0; i < str.length; i++) {
    string += str.charAt(i);
    if (string.length == 2) {
      arr.push(string);
      string = "";
    } else if (i == str.length - 1) {
      arr.push(str.charAt(i) + str.charAt(0));
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (Number(arr[j])%2 == 0) {
      num+=Number(arr[j])
    }
    
  }

  return num
  
}

console.log(evenPairsSum("2044101211")); // 86
console.log(evenPairsSum("33791363")); // 0
console.log(evenPairsSum("23426766201")); // 140
console.log(evenPairsSum("2478201")); // 134
