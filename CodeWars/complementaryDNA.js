/*eslint-disable*/
function DNAStrand(dna) {
  var dna2 = dna.split("");
  var string = "";

  dna2.forEach(element => {
    switch (element) {
      case "A":
        string += "T";
        break;

      case "T":
        string += "A";
        break;

      case "G":
        string += "C";
        break;

      case "C":
        string += "G";
        break;
    }
  });

  return string;
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
