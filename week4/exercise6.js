function hitungHuruf(kata) {
  var arrKata = kata.split(" ");
  var counter = 0;
  var counterTemp = 0;
  var wordArr = [];
  var word = "";
  

  for (let i = 0; i < arrKata.length; i++) {
    counterTemp = 0;
    wordArrTemp = wordArr;
    wordArrCounter = wordArr.length;
    wordTemp = word;
    wordArr = [];

    for (let j = 0; j < arrKata[i].length; j++) {
      for (let k = 0; k < arrKata[i].length; k++) {
        if (
          arrKata[i].charAt(k) == arrKata[i].charAt(j) &&
          j != k &&
          wordArr.indexOf(arrKata[i].charAt(k)) == -1
        ) {
          counterTemp += 1;

          if (wordArr.indexOf(arrKata[i].charAt(k)) == -1) {
            wordArr.push(arrKata[i].charAt(j));
          }
          if (counter < counterTemp) {
            counter = counterTemp;
            word = arrKata[i];
          }
        }
      }
    }
  }

  return word;
}

// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf("I am a passionate developer")); // passionate
console.log(hitungHuruf("aku adalah anak gembala")); // adalah
console.log(hitungHuruf("rajin pangkal kaya")); // pangkal
console.log(hitungHuruf("mengayuh perahu di danau")); // danau
