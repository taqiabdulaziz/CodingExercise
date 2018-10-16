function hitungHuruf(kata) {
  // you can only write your code here!
  var arr = kata.split(' ');
  var uniqueChars= [];
  var freqs= [];
    for (var i = 0; i < arr.length; i++) {
        var uniqueChar = [];
        var freq= [];
        for (var j = 0; j < arr[i].length; j++) {
          if (uniqueChar.indexOf(arr[i][j]) === -1) {
              uniqueChar.push(arr[i][j]);
              freq.push(0)
          } else {
            var indexChar = uniqueChar.indexOf(arr[i][j]);
            freq[indexChar] += 1;
          }
        }
        var total = 0;
        for (var k = 0; k < freq.length; k++) {
          total = total + freq[k];    
        }  
        uniqueChars.push(uniqueChar);
        freqs.push(total)
    }

  var highest = freqs[0];
  var index;
    for (var m = 0; m < freqs.length; m++)
      if (freqs[m] > highest) {
        highest = freqs[m]
        index = m
      }
  return arr[index]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danaux