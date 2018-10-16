function ubahHuruf(kata) {
  // you can only write your code here!
var alphabet ='abcdefghijklmnopqrstuvwxyza'
var katabaru =''
for (var i = 0; i < kata.length; i++) { 
    var temp = alphabet.indexOf(kata[i]);
    var word = alphabet[temp+1];
    katabaru += word
  }

return katabaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu