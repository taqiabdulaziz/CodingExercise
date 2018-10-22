/*eslint-disable*/
/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary(data) {
  var country = [];
  var check = false;
  var i = 1;
  var JSON = {};
  for (let a = 0; a < data.length; a++) {
    if (country == []) {
      country.push(data[a][i]);
    }
    for (let j = 0; j < country.length; j++) {
      if (data[a][i] == country[j]) {
        check = true;
      }
    }

    if (check == false) {
      country.push(data[a][i]);
    }

    check = false;
  }

  for (let k = 0; k < country.length; k++) {
    JSON[country[k]] = {
      total: getTotal(country[k]),
      names: getNames(country[k])
    };
  }

  function getTotal(params) {
    var jml = 0;
    for (let l = 0; l < data.length; l++) {
      if (data[l][1] == params) {
        jml++;
      }
    }

    return jml;
  }

  function getNames(params) {
    var arrName = [];
    for (let l = 0; l < data.length; l++) {
      if (data[l][1] == params) {
        arrName.push(data[l][0]);
      }
    }
    return arrName
  }
  return JSON;
}

// Test cases
console.log(
  participantsSummary([
    ["Dimitri", "Russia"],
    ["Heihachi", "Japan"],
    ["Sergei", "Russia"],
    ["Kazuya", "Japan"],
    ["Hwoarang", "South Korea"],
    ["Jin", "Japan"]
  ])
);
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(
  participantsSummary([
    ["Suzuka", "Japan"],
    ["Steve", "United Kingdom"],
    ["Paul", "USA"]
  ])
);
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

// console.log(participantsSummary([]));
// No participants
