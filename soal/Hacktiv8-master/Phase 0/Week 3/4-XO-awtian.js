function xo(str) {
var xCount = str.split('o').length;
var oCount = str.split('x').length;
return xCount === oCount
}
      
      // TEST CASES
      console.log(xo('xoxoxo')); // true
      console.log(xo('oxooxo')); // false
      console.log(xo('oxo')); // false
      console.log(xo('xxxooo')); // true
      console.log(xo('xoxooxxo')); // true