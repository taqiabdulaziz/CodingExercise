function cariModus(arr) {
  var counter = 0;
  var check = false

  for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
          if (arr[j]==arr[k]) {
              counter+=1
          }
      }
  }

  if (counter/arr.length == arr.length) {
      return -1
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[i] && i != j) {
        check == true
        return arr[i];
      }
    }
  }

  if (check == false) {
      return  -1
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
