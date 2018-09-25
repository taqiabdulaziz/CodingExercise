/*eslint-disable*/

function balikKata(kata) {
  var kataBaru = "";
  for (var jmlHuruf = kata.length - 1; jmlHuruf >= 0; jmlHuruf--) {
    kataBaru += kata[jmlHuruf];
  }

  return kataBaru;
}

//   // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super'));
