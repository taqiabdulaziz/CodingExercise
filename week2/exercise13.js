/*eslint-disable*/

function xo(str) {
  var letterX = 0;
  var letterO = 0;

  for (var i = 0; i <= str.length; i++) {
    if (str.charAt(i) == "x") {
      letterX += 1;
    } else if (str.charAt(i) == "o") {
      letterO += 1;
    }
  }

  if (letterO == letterX) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
