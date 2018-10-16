function palindrome(kata) {
    if(kata.length % 2 !== 1) {
      return false
    }  else {
    var mid = (kata.length + 1) / 2 
      var last = ""
      for (var i = mid ;  i < kata.length ; i++ ) {
        last += kata[i];    
      }
      var beg= kata.slice(0,mid-1);
      var lastRev= ""
      for (var k = last.length -1; k >= 0; k--) {
        lastRev += last[k];
      }
      return beg === lastRev
    }
  }
    
    // TEST CASES
    console.log(palindrome('katak')); // true
    console.log(palindrome('blanket')); // false
    console.log(palindrome('civic')); // true
    console.log(palindrome('kasur rusak')); // true
    console.log(palindrome('mister')); // false

    // ok my work is stupid we actually only need to reverse the whole word and put a === between the reversed and the old one, pardon my stupidity.