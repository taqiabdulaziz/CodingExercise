/*eslint-disable*/

var rows1 = 5;
var rows2 = 5;
var rows3 = 5;
var star = "*";

for (var asterisk1 = 1; asterisk1 <= rows1; asterisk1++) {
  console.log("*");
}

console.log("-------------------------------------------");
for (var asterisk2 = 1; asterisk2 <= rows2; asterisk2++) {
  for (var asterisk2 = 1; asterisk2 <= rows2; asterisk2++) {
    console.log(star.repeat(rows2));
  }
}

console.log("-------------------------------------------");
for (var asterisk2 = 1; asterisk2 <= rows3; asterisk2++) {
  console.log(star.repeat(asterisk2));
}
