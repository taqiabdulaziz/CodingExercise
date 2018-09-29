/*eslint-disable*/
function tentukanDeretAritmatika(arr) {
  var array = [];
  var bool = false;
  for (let i = 1; i < arr.length; i++) {
    var num = arr[i - 1];
    var num2 = arr[i];
    var mod = num2 - num;
    array.push(mod);
  }

  for (let j = 1; j < array.length; j++) {
      if (array[0]%array[j]==0) {
          bool= true
      } else {
          bool = false
      }
  }
  return bool;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
