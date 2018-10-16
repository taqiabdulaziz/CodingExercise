/*eslint-disable*/
/*
==================================
Array Mastery: Shortest Word
==================================

Nama: Awtian Akbar 🐼

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
  var arr = words.split(" ");
  var result = [];
  var count = 0;
  var counter2 = 0;

  for (let i = 0; i < arr.length; i++) {
    counter2 = 0;
    for (let j = 0; j < arr[i].length; j++) {
      counter2++;
    }

    if (count == 0 || counter2 < count) {
      count = counter2;
    }
  }

  for (let l = 0; l < arr.length; l++) {
    var check = false
    for (let m = 0; m < result.length; m++) {
      if (result[m].toUpperCase() == arr[l].toUpperCase()) {
        check = true
      }
    }
    if (arr[l].length == count && check == false) {
      result.push(arr[l]);
    }
  }
  return result;
}

console.log(shortestWords("Do you want to become a great coder ?")); // ['a', '?']
console.log(shortestWords("You dont know what you have until you lose it!")); // ['you', 'it!']
console.log(shortestWords("I am diligent")); // ['I']
