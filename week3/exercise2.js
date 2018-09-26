/*eslint-disable*/
var input = "hello world!";

function balikString(string) {
  var returnString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    returnString += string[i];
  }

  return returnString;
}

console.log(balikString(input));
