function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var arr = kalimat.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        }
        else if (arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    kalimat = arr.join('');
    return kalimat
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"