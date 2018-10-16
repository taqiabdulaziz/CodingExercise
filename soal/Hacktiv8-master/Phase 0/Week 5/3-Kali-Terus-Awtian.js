function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (String(angka).length === 1) {
        return angka;
    }
    else {
        let arr = String(angka).split('');
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
          result *= arr[i];
        }
        if (String(result).length === 1) return result;
        else {
          return kaliTerusRekursif(result)
        }
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6