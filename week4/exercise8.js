function urutkanAbjad(str) {
  var arr = [];
  var arrResult = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    arr.push(alphabet.indexOf(str.charAt(i)));
  }

  arr.sort(function(a, b) {
    return a - b;
  });

  for (let j = 0; j < arr.length; j++) {
    arr[j] = arrResult.push(alphabet[arr[j]]);
  }
  return arrResult.join("").toString();
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
