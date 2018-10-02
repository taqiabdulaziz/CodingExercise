function ubahHuruf(kata) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var string = "";

  for (let i = 0; i < kata.length; i++) {
    string += alphabet.charAt(alphabet.indexOf(kata.charAt(i)) + 1);
  }

  return string;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
