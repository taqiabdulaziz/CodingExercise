function angkaPrima(angka) {
  var arr = [];

  for (let i = 1; i <= angka; i++) {
    if (angka%i==0) {
      arr.push(i)
    }
  }

  if (arr.length > 2) {
    return false
  } else {
    return true
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
