/*eslint-disable*/
/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

function sensorSentence(sentence, words) {
  var result = "";
  var kalimat = "";
  var sensor = [];
  var sensorStr = "";

  

  for (let l = 0; l < sentence.length; l++) {
    if (l == sentence.length - 1) {
      sensorStr += sentence[l];
      sensor.push(sensorStr);
      sensorStr = "";
    }

    if (sentence[l] != " ") {
      sensorStr += sentence[l];
    } else if (sentence[l] == " ") {
      sensor.push(sensorStr);
      sensorStr = "";
    }
  }

  for (let i = 0; i < sensor.length; i++) {
    for (let j = 0; j < sensor[i].length; j++) {
      kalimat += sensor[i][j];
    }

    if (kalimat == words) {
      result += "*".repeat(kalimat.length) + " ";
      kalimat = ""
    } else {
      result += kalimat + " ";
      kalimat = "";
    }
  }

  return result;
}

console.log(sensorSentence("Hey you are a murderer", "murderer")); // Hey you are a ********

console.log(sensorSentence("I will kill you later, i swear", "kill")); // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")); // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")); // Aku ingin pindah ke ********

console.log(sensorSentence("HAHA HEHE HIHI HUHU HOHO", "WEY")); // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence("", "")); // ''
