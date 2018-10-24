/*eslint-disable*/
/*
  Halang Rintang

  Diberikan sebuah function halangRintang yang menerima 2 parameter yaitu:
   - parameter pertama adalah string menggambarkan arena perlombaan dimana symbol `_` menandakan arena datar
     dan symbol `n` menandakan rintangan.
   - parameter kedua adalah number daya lompat kuda yang menentukan berapa banyak rintangan yang dapat dilewati
     dalam sekali lompat

  function ini akan mengembalikan jarak yang dapat di tempuh oleh kuda tersebut sebelum akhirnya menabrak rintangan

  example:
  halangRintang('__n__nn__nnn__n', 2)

  proses:
  karakter ke-1 dan 2 adalah arena datar sehingga dapat dilewati
  karakter ke-3 terdapat satu rintangan sehingga dapat dilewati
  karakter ke-4 dan 5 adalah arena datar sehingga dapat dilewati
  karakter ke-6 dan 7 terdapat dua rintangan sehinga dapat dilewati
  karakter ke-8 dan 9 adalah arena datar sehingga dapat dilewati
  karakter ke-10 sampai 11 terdapat 3 rintangan sedangkan daya lompat hanya 2 sehingga tidak dapat dilewati dan berhenti di 9

  output:
  9

  RULES:
  - WAJIB menyertakan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .slice(), .indexOf()
  - DILARANG menggunakan regex

*/

/*
PSEUDOCODE
ADD VALUE 'arena' WITH "_"
INIT 'counter' WITH VALUE OF 0
INIT 'init' WITH VALUE OF false
INIT 'lastposition' WITH VALUE OF 0

FOR LOOP FROM i EQUAL TO 0 TO LENGTH OF 'arena' SUBTRACT BY 1
  IF i INDEX OF 'arena' IS EQUAL TO "n"
    THEN ADD VALUE 1 TO 'counter'
    THEN IF 'init' EQUAL TO false
      THEN RE-INITIALIZE 'lastposition' WITH VALUE OF i

    THEN REINITIALIZE 'init' WITH VALUE OF true
  ELSE IF i INDEX OF 'arena' NOT EQUAL TO "n" AND 'init' IS EQUAL TO true
    THEN IF 'dayaLompat' IS LESS THAN 'counter'
      THEN DISPLAY 'lastposition'
      ELSE IF dayalompat IS EQUAL TO OR MORE THAN 'counter'
        RE-INIT counter WITH VALUE 0
        RE-INIT lastposition WITH VALUE 0
        RE-INIT init WITH VALUE false

  IF i EQUAL TO LENGTH OF ARENA SUBTRACT BY 1
    THEN DISPLAY i
*/
function halangRintang(arena, dayaLompat) {
  arena+= "_"
  var counter = 0;
  
  var init = false;
  var lastPosition = 0;
  

  for (let i = 0; i < arena.length; i++) {
    if (arena[i] == "n") {
      counter++;

      if (init == false) {
        lastPosition = i;
      }
      init = true;
    } else if (arena[i] != "n" && init == true) {
      
      //UDAH BENER
      if (dayaLompat < counter) {
        return lastPosition; //UDAH BENER
      } else if (dayaLompat >= counter) {
        counter = 0;
        lastPosition = 0
        init = false
      }
    }
    if (i == arena.length - 1) {
      return i;
    }
  }


}

// TEST CASES
console.log(halangRintang("___n__nn", 1)); // 6
console.log(halangRintang("___n__nn_nnn", 2)); // 9
console.log(halangRintang("_nnnnn___", 1)); // 1
console.log(halangRintang("____nnnn__nnnnn", 4)); // 10
console.log(halangRintang("nnnnn____", 2)); // 0
