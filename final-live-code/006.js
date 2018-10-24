/*eslint-disable*/
/*
  Count duplicates using recursive! 🐼

  Diberikan sebuah function countDuplicateLettersRecursive yang menerima 1 parameter bertipe string.
  Function ini akan mengembalikan berapa banyak huruf yang duplikat

  RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function countDuplicateLettersRecursive
  - Dilarang mengubah tipe data parameter saat dipanggil kembali
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif
  - Dilarang menggunakan regex

*/

function countDuplicateLettersRecursive(word) {
  var arr = []
  var check  = false
  if (word.length == 1) {
    return 0;
  }
  if (word.slice(1).indexOf(word[0]) == -1) {
    return 0 + countDuplicateLettersRecursive(word.slice(1));
  } else if (word.slice(0).indexOf(word[0]) != -1 && arr[arr.length-1] !=word.slice(0).indexOf(word[0])) {
     
    if (arr.length == 0) {
      arr.push(word[word.indexOf(word[0])])
    }
    return (
      1 +
      countDuplicateLettersRecursive(word.slice(word.slice(1).indexOf(word[0])))
    );
  }
}

console.log(countDuplicateLettersRecursive("passionate")); // 2
console.log(countDuplicateLettersRecursive("adalah")); // 1
console.log(countDuplicateLettersRecursive("pangkal")); // 1
console.log(countDuplicateLettersRecursive("danau")); // 1
console.log(countDuplicateLettersRecursive("greatest")); // 2
console.log(countDuplicateLettersRecursive("wizard")); // 0
