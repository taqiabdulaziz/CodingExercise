function cariMedian(arr) {
    // you can only write your code here!
    arr.sort(function(a, b){a - b});
    if (arr.length%2 === 0) {
        var nearmid = arr.length/2;
        return (arr[nearmid] + arr[nearmid-1])/2;
    }
    else {
        var mid = (arr.length/2) - 0.5;
        return arr[mid];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5