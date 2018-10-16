function ubahHuruf(kata) {
  // you can only write your code here!
var arr = kata.split('');
for (var i = 0; i < kata.length; i++) { 
  var current = arr[i];
  switch(current) {
    case 'a' : current = 'b'; break;
    case 'b' : current = 'c'; break;
    case 'c' : current ='d'; break;
    case 'd' : current ='e'; break;
    case 'e' : current ='f'; break;
    case 'f' : current ='g'; break;
    case 'g' : current ='h'; break;
    case 'h' : current ='i'; break;
    case 'i' : current ='j'; break;
    case 'j' : current ='k'; break;
    case 'k' : current ='l'; break;
    case 'l' : current ='m'; break;
    case 'm' : current ='n'; break;
    case 'n' : current ='o'; break;
    case 'o' : current ='p'; break;
    case 'p' : current ='q'; break;
    case 'q' : current ='r'; break;
    case 'r' : current ='s'; break;
    case 's' : current ='t'; break;
    case 't' : current ='u'; break;
    case 'u' : current ='v'; break;
    case 'v' : current ='w'; break;
    case 'w' : current ='x'; break;
    case 'x' : current ='y'; break;
    case 'y' : current ='z'; break;
    case 'z' : current ='a'; break;
    default: undefined;}
    arr[i] = current;
  }
kata = arr.join('');
return kata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu