/*eslint-disable*/
function graduates(students) {
  var kelas = [];
  var JSON = {};

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

  //MAKE ARRAY STRUCTURE
  for (let l = 0; l < kelas.length; l++) {
    var kelas2 = kelas[l];
    JSON[kelas2] = [];
  }

  //APPLY DATA
  for (let i = 0; i < kelas.length; i++) {
    for (let j = 0; j < students.length; j++) {
      if (kelas[i] == students[j].class && students[j].score > 75) {
        JSON[kelas[i]].push({
          name: students[j].name,
          score: students[j].score
        });
      }
    }
  }

  return JSON;
}

console.log(
  graduates([
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

//   {
//     foxes: [
//       { name: 'Dimitri', score: 90 }
//     ],
//     wolves: [
//       { name: 'Alexei' , score: 85 },
//       { name: 'Anastasia', score: 78 }
//     ]
//   }

console.log(
  graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
