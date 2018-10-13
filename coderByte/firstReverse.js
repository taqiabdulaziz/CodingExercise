function FirstReverse(str) {
  var string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    string += str.charAt(i);
  }

  return string;
}

// keep this function call here
FirstReverse(readline());

