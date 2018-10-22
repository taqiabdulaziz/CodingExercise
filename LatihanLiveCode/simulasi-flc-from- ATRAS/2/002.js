/*eslint-disable*/
/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

*/

function virusCheck(str, viruses) {
  var virusArr =[]
  var virusCount = 0;

  if (viruses == null || str == "") {
    return "No viruses detected"
  }

  for (let l = 0; l < viruses.length; l++) {
    if (viruses[l] != "|") {
      virusArr.push(viruses[l])
    }
    
  }

  for (let i = 0; i < virusArr.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (virusArr[i].toUpperCase() == str[j].toUpperCase()) {
        virusCount++;
      }
    }
  }

  return virusCount + " viruses detected"
}

console.log(virusCheck("qlD4MZax0raQqew", "x|0|q")); // 4 viruses detected
console.log(virusCheck("HH0NBP1zRa", "h|r")); // 3 viruses detected
console.log(virusCheck("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6 viruses detected
console.log(virusCheck("mjBgPlzks", "m")); // 1 virus detected
console.log(virusCheck("AIn4Ks05bBaa", "x")); // No virus detected
console.log(virusCheck("RsMFjBUjvIaP")); // No virus detected
console.log(virusCheck("")); // No virus detected
