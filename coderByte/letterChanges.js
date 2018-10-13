function LetterChanges(str) {
  var string = "";
  var alph = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = str.length - 1; i >= 0; i--) {
      if (alph.indexOf(str.charAt(i)) == -1) {
        string += str.charAt(i);
      } else if (alph.indexOf(str.charAt(i) != -1)) {
        string+= alph.charAt(alph.indexOf(str.charAt(i))+1)
      }
    
  }

  return string;
}

// keep this function call here
LetterChanges(readline());

