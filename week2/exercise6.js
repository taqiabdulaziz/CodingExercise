/*eslint-disable*/
var number1 = 1;
var number2 = 20;

console.log("LOOPING PERTAMA");
while (number1 <= 20) {
  if (number1 % 2 == 0) {
    console.log(number1 + " - I love coding");
  }
  number1++;
}

console.log("LOOPING KEDUA");
while (number2 >= 2) {
  if (number2 % 2 == 0) {
    console.log(number2 + " - I will become fullstack developer");
  }
  number2--;
}

console.log("LOOPING PERTAMA");
for (var forNum = 1; forNum <= 20; forNum++) {
  console.log(forNum + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var forNum2 = 20; forNum2 >= 1; forNum2--) {
    console.log(forNum2 + ' - I will become fullstack developer')
}

for (var num3 = 1; num3 <= 100; num3++) {
    if (num3%2 == 0) {
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
}

for (var num4 = 1; num4 <= 100; num4+=2) {
    if (num4%3 == 0) {
        console.log(num4 + ' Kelipatan 3')
    } else {
        console.log('')
    }
}

for (var num5 = 1; num5 <= 100; num5+=5) {
    if (num5%6 == 0) {
        console.log(num5 + ' Kelipatan 6')
    } else {
        console.log('')
    }
}

for (var num6 = 1; num6 <= 100; num6+=9) {
    if (num6%10 == 0) {
        console.log(num6 + ' Kelipatan 10')
    } else {
        console.log('')
    }
}