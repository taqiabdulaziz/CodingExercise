/*eslint-disable*/
function angkaPalindrome(num) {
  function cekPalindrome(num) {
    var revNum = "";
    var numString = String(num);

    for (var i = numString.length - 1; i >= 0; i--) {
      revNum += numString.charAt(i);
    }
    if (revNum == numString) {
      return true;
    } else {
      return false;
    }
  }

  function nextPalNumber(num) {
    for (let j = num+1; ; j++) {
      if (cekPalindrome(j)) {
        return j;
        break;
      }
    }
  }
  return nextPalNumber(num);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


