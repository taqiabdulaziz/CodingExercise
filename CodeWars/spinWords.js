/*eslint-disable*/
function spinWords(str) {
  var arr = str.split(" ");
  var revArr = [];

  for (let i = 0; i < arr.length; i++) {
    var counter = 0;
    var stringTemp = ""

    //count word
    for (let j = 0; j < arr[i].length; j++) {
      counter++;
    }
    if (counter > 4) {
      for (let l = arr[i].length; l >= 0; l--) {
        stringTemp += arr[i].charAt(l)
      }

      revArr.push(stringTemp)
    } else if (counter <= 4) {
        revArr.push(arr[i])
    }
  }

  return revArr.join(" ")
}

console.log(spinWords("This is another test"));
