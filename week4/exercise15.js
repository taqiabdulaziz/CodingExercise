/*eslint-disable*/
function changeVocals(str) {
  //TANPA INDEXOF()
  var string = "";
  var ALPH = "aiueo";
  var ALPHB = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ALPH.length; j++) {
      if (
        str.charAt(i) == ALPH.charAt(j).toLowerCase() ||
        str.charAt(i) == ALPH.charAt(j).toUpperCase()
      ) {
        for (let k = 0; k < ALPHB.length; k++) {
          if (ALPH.charAt(j) == ALPHB.charAt(k)) {
            if (str.charAt(i) == str.charAt(i).toLowerCase()) {
              string += ALPHB.charAt(k + 1); 
            } else if (str.charAt(i) == str.charAt(i).toUpperCase()) {
              string += ALPHB.charAt(k + 1).toUpperCase();
            }
          }
        }
        break;
      } else if (
        str.charAt(i) != ALPH.charAt(j).toLowerCase() ||
        str.charAt(i) != ALPH.charAt(j).toUpperCase()
      ) {
        if (j == 4) {
          string += str.charAt(i);
        }
      }
    }
  }

  return reverseWord(string)
}

function reverseWord(str) {
  var arr = [];
  for (let l = str.length; l >= 0; l--) {
    arr.push(str.charAt(l));
  }

  return setLowerUpperCase(arr.join(" "));
}

function setLowerUpperCase(str) {
  var string = "";
  var string2 = "String sebelum " + str;
  for (let m = 0; m < str.length; m++) {
    if (str.charAt(m) == str.charAt(m).toLowerCase()) {
      string += str.charAt(m).toUpperCase();
    } else if (str.charAt(m) == str.charAt(m).toUpperCase()) {
      string += str.charAt(m).toLowerCase();
    } else if (str.charAt(m) == " ") {
      string += " ";
    }
  }

  return removeSpaces(string)
}

function removeSpaces(str) {
  var string = "";
  for (let n = 0; n < str.length; n++) {
    if (str.charAt(n) != " ") {
      string += str.charAt(n);
    }
  }

  return string
}

function passwordGenerator(name) {

  if (name.length < 5) {
    return "'Minimal karakter yang diinputkan adalah 5 karakter'"
  } else {
    return changeVocals(name);
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
// console.log(changeVocals("Sergei Dragunov"));
// console.log(reverseWord("Sfrgfj Drbgvnpv"));
// console.log(setLowerUpperCase("vpnvgbrD jfgrfS"));




// console.log(reverseWord());
