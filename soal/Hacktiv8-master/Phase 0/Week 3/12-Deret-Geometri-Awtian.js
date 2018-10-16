function tentukanDeretGeometri(arr) {
    // you can only write your code here!
var checker = 0;
for (var i = 1; i < arr.length-1; i++) {
    if (arr[i]/arr[i-1] === arr[i+1]/arr[i]) {
        checker++;
    }
    else {
        checker -= checker;
    } 
}   
    if (checker > 0) {
        return true;
    }
    else {
        return false;
    }
}  
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false