/*eslint-disable*/
function kaliTerusRekursif(angka) {
  var result = 1;

  for (let i = 0; i < angka.toString().length; i++) {
    result = result * parseInt(angka.toString().charAt(i));
  }

  if (result.toString().length == 1) {
    return result;
  } else if (result.toString().length > 1) {
    return kaliTerusRekursif(result);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
