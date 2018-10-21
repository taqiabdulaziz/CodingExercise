/*eslint-disable*/
function tribonacci(signature, n) {
  var result = signature;

  switch (n) {
    case 2:
      return [result[0], result[1]];
      break;

    case 1:
      return [result[0]];
      break;

    case 0:
      return [];
      break;
  }

  for (let i = 0; i <= n * n; i++) {
    if (result.length == n) {
      return result;
    }
    result.push(result[0 + i] + result[1 + i] + result[2 + i]);
  }
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([1, 1, 1], 1));
