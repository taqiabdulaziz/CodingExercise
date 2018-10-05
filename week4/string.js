function palindrome(kata) {

 for(var i = 0; i < kata.length; i++) {
   for(var j = kata.length - 1; j >= 0; j--) {
     return kata[i] === kata[j];
   }
 }
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));