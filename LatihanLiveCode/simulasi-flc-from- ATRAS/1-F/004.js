/*eslint-disable*/
/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  var words1 = words.split(" ");
  var jumlah = 0;
  var n = 0;
  var median = 0;
  var result = [];

  for (let i = 0; i < words1.length; i++) {
    for (let j = 0; j < words1[i].length; j++) {
      jumlah++;
    }

    n++;
    median = Math.round(jumlah / n);
  }

  var counter = 0;
  for (let m = 0; m < words1.length; m++) {
    for (let n = 0; n < words1[m].length; n++) {
      counter++
    }

    if (counter == median) {
      result.push(words1[m])
    }

    counter = 0
  }

  return result;
}

console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(
  averageLengthWord("You dont know what you have until you lose it!")
); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord("I am diligent")); // []
