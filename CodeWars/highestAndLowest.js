/*eslint-disable*/
function highAndLow(numbers) {
  var num1 = numbers.split(" ");
  var num = [];
  var counter = 0;

  

  num1.forEach(element => {
    num.push((element));
  });


  while (counter < num.length) {
    for (let i = 0; i < num.length; i++) {
      if (Number(num[i]) > Number(num[i + 1])) {
        var a = num[i + 1];
        num[i + 1] = num[i];
        num[i] = a;
      } else if (Number(num[i]) >= Number(num[i + 1])) {
        counter++;
      }
    }
  }
  
  return num[num.length - 1].toString() + " " + num[0].toString();
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
