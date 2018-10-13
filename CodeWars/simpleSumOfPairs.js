/*eslint-disable*/
function solve(n) {
  if (n < 10000000000) {
    var result = 0;

    for (var i = 1; i <= n; i++) {
      var a1 = 0;
      var b1 = 0;
      var a = i;
      var b = n - i;

      for (var j = 0; j < a.toString().length; j++) {
        a1 += Number(a.toString().charAt(j));
      }
      for (var j = 0; j < b.toString().length; j++) {
        b1 += Number(b.toString().charAt(j));
      }

      if (result < a1 + b1) {
        result = a1 + b1;
      }
    }

    return result;
  }
}

console.log(solve(18));
console.log(solve(29));
console.log(solve(45));
console.log(solve(1140));
console.log(solve(7019));
