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
/* LOGIC
1. pertama kita split words menjadi array dan kita cari panjang terrendah dari kata kata yang ada di array tersebut
2. kemudian buat loop lagi yang digunakan untuk mengepush kata kata yang memiliki panjang yang sesuai dengan yang di inginkan dan juga belum ada di array shortestArr
3. semua proses di nomor dua akan selalu kita lowercase karena output yang diinginkan adalah lowercase dari kata terpendek yang ada pada di kalimat
*/



function shortestWords(words) {
  // Code here
  let arr = words.split(' ');
  let shortest = arr[0].length;
  let shortestArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest) shortest = arr[i].length;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === shortest && shortestArr.indexOf(arr[i].toLowerCase()) === -1) {
      shortestArr.push(arr[i].toLowerCase());
    }
  }
  
  for (let i = 0; i < shortestArr.length; i++) {
    if(shortestArr[i] === "i") shortestArr[i] = "I";
  }
  return shortestArr;
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']