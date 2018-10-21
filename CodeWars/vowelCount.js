/*eslint-disable*/
function getCount(str) {
  var vowelsCount = 0;
  var vowel = "aiueo";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
        if (str[i] == vowel[j]) {
            vowelsCount++
        }
    }
  }

  return vowelsCount
}

console.log(getCount("abracadabra")); //5
