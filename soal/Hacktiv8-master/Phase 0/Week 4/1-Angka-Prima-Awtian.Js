function angkaPrima(angka) {
    // you can only write your code here!
    var prima = true;
    for(var i = 2; i < angka; i++) {
        if (angka%i === 0) {
        prima = false;
        }
    }
    return prima;

  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

