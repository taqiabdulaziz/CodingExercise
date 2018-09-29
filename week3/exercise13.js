/*eslint-disable*/
function targetTerdekat(arr) {
  var o = arr.indexOf("o");
  var x = [];
  var array = [];
  var x2 = 1;

  if (arr.indexOf("x") == -1) {
    x2 = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "x") {
      x.push(i);
    }
  }

  function closest(array, num) {
    var i = 0;
    var minDiff = 1000;
    var ans;
    for (i in array) {
      var m = Math.abs(num - array[i]);
      if (m < minDiff) {
        minDiff = m;
        ans = array[i];
      }
    }
    return ans;
  }

  if (x2 != 0) {
    return Math.abs(closest(x, o) - o);
  } else if (x2 == 0) {
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
