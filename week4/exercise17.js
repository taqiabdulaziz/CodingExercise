/*eslint-disable*/
function totalDigitRekursif(angka) {
  if (isNaN(angka) != true) {
    return (
      parseInt(angka.toString().charAt(parseInt(angka.toString().length - 1))) +
      totalDigitRekursif(
        parseInt(angka.toString().substring(0, angka.toString().length - 1))
      )
    );
  } else {
    return 0;
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
