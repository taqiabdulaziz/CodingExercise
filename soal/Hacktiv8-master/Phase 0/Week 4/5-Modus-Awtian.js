function cariModus(arr) {
  // you can only write your code here!
  var unique = [];
  var freq = [];
  
  for (var i = 0 ; i < arr.length; i++){
    if (unique.indexOf(arr[i]) === -1) { //kalau tidak ada indexOf returnnya -1 
      unique.push(arr[i])
      freq.push(1)
    }
    else {
      var posisi = unique.indexOf(arr[i])
      freq[posisi] += 1
    }
  }
  
  var highest = 0;
  for (var j = 0; j < freq.length; j++) {
    if (freq[j] > highest) {
      highest = freq[j]
      }
  }
  
  if (highest === 1) return -1;
  if (freq.length === 1) return -1;
  var b = freq.indexOf(highest)
  return unique[b] 
  
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1