/*eslint-disable*/
function highestScore(students) {
  //STRUKTUR JSON
  var JSON = {};
  var kelas = [];
  var person = [];
  var score = [];

  //MAPPING CLASSES
  for (let i = 0; i < students.length; i++) {
    var kelasBool = false;
    if (kelas.length == 0) {
      kelas.push(students[i].class);
    } else if (kelas.length != 0) {
      for (let j = 0; j < kelas.length; j++) {
        if (kelas[j] == students[i].class) {
          kelasBool = true;
        } else if (j == kelas.length - 1) {
          if (kelasBool == false) {
            kelas.push(students[i].class);
          }
        }
      }
    }
  }

  //MAP HIGHEST SCORRER EACH CLASSES
  for (let k = 0; k < kelas.length; k++) {
    for (let l = 0; l < students.length; l++) {
      if (kelas[k] == students[l].class) {
        if (score.length == 0) {
          score.push(students[l].score);
          person.push(students[l].name);
        } else if (score[k] < students[l].score) {
          score[k] = students[l].score;
        } else if (score[k] == undefined) {
          score.push(students[l].score);
          person.push(students[l].name);
        }
      }
    }
  }

  //MAKE RESULT DATA
  for (let m = 0; m < kelas.length; m++) {
    var kelas2 = kelas[m];
    JSON[kelas2] = {
      name: person[m],
      score: score[m]
    };
  }

  return JSON;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
