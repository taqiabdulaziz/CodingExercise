function LongestWord(sen) {
  var test = sen.match(/[a-z]+/gi);
  var testArr = [];
  var counter = 0;
  var word = "";

  for (let i = 0; i < test.length; i++) {
    testArr.push(test[i].length);
  }

  for (let j = 0; j < testArr.length; j++) {
    if (counter < testArr[j]) {
      counter = testArr[j];
    }
  }

  for (let k = 0; k < test.length; k++) {
    if (test[k].length == counter) {
      return test[k];
    }
  }
}

// keep this function call here
  LongestWord(readline());
