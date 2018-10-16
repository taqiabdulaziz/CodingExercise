function perpangkatanDua(str) {
    // you can only write your code here!]
     if (str===1) {
        return 0
    }
  
    var count = 0;
    var max = 0;
    for (var i = 2; i <= str; i *= 2) {
        if (i <= str) {
            count++;
            max = i;
        }    
    }
  
    if (max === str) {
        return count;
    }
    else {
        return -1;
    }
  }
  
  // TEST CASES
  console.log(perpangkatanDua(64)); // 6
  console.log(perpangkatanDua(22)); // -1
  console.log(perpangkatanDua(16)); // 4
  console.log(perpangkatanDua(222)); // -1
  console.log(perpangkatanDua(1)); // 0