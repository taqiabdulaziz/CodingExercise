/*eslint-disable*/
function tentukanDeretGeometri(arr) {
  var array = [];
  var bool = false;
  for (let i = 1; i < arr.length; i++) {
    var num = arr[i - 1];
    var num2 = arr[i];
    var mod = num2 / num;
    array.push(mod);
  }

  for (let j = 1; j < array.length; j++) {
    if (array[0] % array[j] == 0) {
      bool = true;
    } else {
      bool = false;
    }
  }
  return bool;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
