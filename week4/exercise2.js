function fpb(angka1, angka2) {
  var arrNum1 = [];
  var arrNum2 = [];

  for (let i = 1; i <= angka1; i++) {
    if (angka1 % i == 0) {
      arrNum1.push(i);
    }
  }

  for (let j = 1; j <= angka2; j++) {
    if (angka2 % j == 0) {
      arrNum2.push(j);
    }
  }

  for (let k = arrNum1.length - 1; k >= 0; k--) {
    for (let l = arrNum2.length - 1; l >= 0; l--) {
      if (arrNum1[k] == arrNum2[l]) {
        return arrNum1[k];
      }
    }
  }

  //KALO 3 PARAMETER GIMANA YA?
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
