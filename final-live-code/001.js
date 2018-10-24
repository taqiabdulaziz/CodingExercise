/*eslint-disable*/
/*
  ODD EVEN WORDS
  ==================

  function oddEventWord adalah sebuah function yang menerima 1 parameter berupa string kalimat.
  function ini akan mengubah setiap kata dalam kalimat tersebut menjadi odd atau even
  - jika jumlah karakter dalam kata tersebut adalah ganjil maka dirubah menjadi odd
  - jika jumlah karakter dalam kata tersebut adalah genap maka dirubah menjadi even


  example:
  oddEventWord('aku programmer')

  proses:
  terdiri dari dua kata aku, dan programmer
  kata aku terdiri dari tiga karakter a, k dan u sehingga dirubah menjadi odd
  kata programmer terdiri dari sepuluh karakter p, r, o, g, r, a, m, m, e, dan r sehingga dirubah menjado even


  output: odd even

  RULES:
  - WAJIB disertai dengan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .indexOf()

*/

/*
PSEUDOCODE

INITIALIZE 'result' WITH VALUE OF ''
INITIALIZE 'arr' WITH VALUE OF []
INITIALIZE 'hasil WITH VALUE OF ''
INITIALIZE 'counter' WITH VALUE OF 0

IF LENGTH OF 'kalimat' IS EQUAL TO 0
  DISPLAY "invalid input"

FOR LOOP FROM i EQUAL TO 0 TO LENGTH OF 'kalimat' SUBTRACT BY 1
  IF i EQUAL TO LENGTH OF 'kalimat'
    THEN ADD CHARACTER AT i OF 'kalimat' TO 'result'
    THEN PUSH 'result' TO 'arr'
    THEN RE-INITIALIZE 'result' WITH VALUE OF ''
  
  IF CHARACTER AT i OF 'kalimat' EQUAL TO ' '
    THEN ADD CHARACTER AT i OF 'kalimat' TO 'result'
    ELSE IF CHARACTER AT i OF 'kalimat' NOT EQUAL TO ' '
      THEN PUSH 'result' TO 'arr'
      THEN REINITIALIZE 'result' WITH VALUE OF ''

  END FOR LOOP IF i EQUAL TO LENGTH OF 'kalimat' SUBTRACT BY 1

FOR LOOP FROM i EQUAL TO 0 TO LENGTH OF 'arr' SUBTRACT BY 1
  FOR LOOP FROM j EQUAL TO 0 TO LENGTH OF i INDEX OF 'arr'
    ADD VALUE 1 TO 'counter'
    END FOR LOOP IF j EQUAL TO LENGTH OF i INDEX OF 'arr'
  
  IF 'counter' MOD BY 2 EQUAL TO 0
    THEN ADD VALUE 'even ' TO 'hasil'
    ELSE IF 'counter' MOD BY 2 EQUAL TO 1
      THEN ADD VALUE 'odd ' TO 'hasil'

  RE-INITIALIZE 'counter' WITH VALUE OF 0
  END FOR LOOP IF i EQUAL TO LENGTH OF 'arr' SUBTRACT BY 1

  DISPLAY HASIL
*/

function oddEventWord(kalimat) {
  var result = "";
  var arr = [];

  var hasil = "";
  var counter = 0;

  if (kalimat.length == 0) {
    return "Invalid input";
  }

  for (let i = 0; i < kalimat.length; i++) {
    if (i == kalimat.length - 1) {
      result += kalimat[i];
      arr.push(result);
      result = "";
    }

    if (kalimat[i] != " ") {
      result += kalimat[i];
    } else if (kalimat[i] == " ") {
      arr.push(result);
      result = "";
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      counter++;
    }

    if (counter % 2 == 0) {
      hasil += "even ";
    } else if (counter % 2 == 1) {
      hasil += "odd ";
    }

    counter = 0;
  }

  return hasil;
}

console.log(oddEventWord("baca buku")); // even even
console.log(oddEventWord("rajin belajar")); // odd odd
console.log(oddEventWord("aku suka javascript")); // odd even even
console.log(oddEventWord("ikan")); // even
console.log(oddEventWord("")); // invalid input
