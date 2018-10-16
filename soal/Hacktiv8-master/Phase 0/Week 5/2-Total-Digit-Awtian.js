function totalDigitRekursif(angka) {
    // you can only write your code here!
    let arr = String(angka).split('');
    let arrmax = arr.length-1;
    let lastnum = arr[arrmax];
    if ( arrmax === 0) {
        return + angka;
    } else {
      arr.pop();
      arr = arr.join('');
      arr = parseInt(arr);
      return parseInt(lastnum) + (totalDigitRekursif(arr))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5