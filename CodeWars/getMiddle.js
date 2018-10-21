/*eslint-disable*/
function getMiddle(s) {
  median = s.length / 2;

  if (s.length % 2 == 0) {
    return s[median - 1] + s[median];
  }

  return s[Math.floor(median)];

  
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("abcde"));
