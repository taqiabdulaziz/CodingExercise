function tukarBesarKecil(kalimat) {
  var arr = '';
  var word = kalimat

  for (let j = 0; j < word.length ;j++) {
    if (kalimat.charAt(j) === kalimat.charAt(j).toUpperCase()) {
        arr+=kalimat.charAt(j).toLowerCase()
    } else if (kalimat.charAt(j) === kalimat.charAt(j).toLowerCase()) {
        arr+=kalimat.charAt(j).toUpperCase()
    }
  }

  return arr;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
