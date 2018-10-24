/*eslint-disable*/
/*
  Class report 🐼

  Class report adalah sebuah function yang akan melaporkan sebuah kondisi passing atau failure dari
  sebuah sekolah.

  Class report hanya akan menerima 1 buah parameter yaitu sebuah array of object yang berisi nama, kelas,
  dan nilai student, dan akan mengembalikan sebuah object yang berisi key value pair yang berisi object lagi
  di dalammnya, dan di dalam object itu akan ada 2 kategori, yaitu passing, dan failing, untuk yang passing
  berisi semua student dari kelas tersebut dengan nilai diatas atau sama dengan 80, sedangkan dibawah itu
  dikategorikan ke failing.
  Untuk lebih jelasnya silahkan langsung cek pada soal dan test case yang ada di bawah.

  NOTE:
  command JSON.stringify tidak perlu dihiraukan

*/

function classReport(students) {
  var kelas = [];
  var check = false;
  var JSON = {}
  //MAPPING CLASS

  for (let i = 0; i < students.length; i++) {
    if (kelas.length == 0) {
      kelas.push(students[0].class);
    }
    for (let j = 0; j < kelas.length; j++) {
      if (students[i].class == kelas[j]) {
        check = true;
      }
    }

    if (students[i].score >= 80 && check == false) {
      kelas.push(students[i].class);
    }

    check = false;
  }

  for (let i = 0; i < kelas.length; i++) {
    JSON[kelas[i]] = {
      "pass": passTest(kelas[i]),
      "fail": failTest(kelas[i])
    }
    
  }

  function passTest(params) {
    var result = []
    for (let i = 0; i < students.length; i++) {
      if (students[i].score >= 80 && students[i].class == params) {
        result.push({
          "name": students[i].name,
          "score": students[i].score
        })
      }
      
    }

    return result
  }

  function failTest(params) {
       var result = []
    for (let i = 0; i < students.length; i++) {
      if (students[i].score < 80 && students[i].class == params) {
        result.push({
          "name": students[i].name,
          "score": students[i].score
        })
      }
      
    }

    return result
    
  }

  return JSON;
}

console.log(
  JSON.stringify(
    classReport([
      { name: "Aeon", class: "Wolf", score: 90 },
      { name: "Arctic", class: "Fox", score: 30 },
      { name: "Alpha", class: "Wolf", score: 33 },
      { name: "Grimnir", class: "Wolf", score: 44 },
      { name: "Oxford", class: "Fox", score: 100 },
      { name: "Lively", class: "Fox", score: 99 },
      { name: "Miracle", class: "Fox", score: 60 },
      { name: "Freki", class: "Wolf", score: 30 },
      { name: "Geri", class: "Wolf", score: 20 },
      { name: "Loki", class: "Fox", score: 99 },
      { name: "Baldr", class: "Wolf", score: 88 },
      { name: "Eostra", class: "Fox", score: 20 }
    ]),
    null,
    2
  )
);
/*
{
  "Wolf": {
    "pass": [
      {
        "name": "Aeon",
        "score": 90
      },
      {
        "name": "Baldr",
        "score": 88
      }
    ],
    "fail": [
      {
        "name": "Alpha",
        "score": 33
      },
      {
        "name": "Grimnir",
        "score": 44
      },
      {
        "name": "Freki",
        "score": 30
      },
      {
        "name": "Geri",
        "score": 20
      }
    ]
  },
  "Fox": {
    "pass": [
      {
        "name": "Oxford",
        "score": 100
      },
      {
        "name": "Lively",
        "score": 99
      },
      {
        "name": "Loki",
        "score": 99
      }
    ],
    "fail": [
      {
        "name": "Arctic",
        "score": 30
      },
      {
        "name": "Miracle",
        "score": 60
      },
      {
        "name": "Eostra",
        "score": 20
      }
    ]
  }
}
*/
console.log(
  JSON.stringify(
    classReport([
      { name: "Berisa", class: "Kanji", score: 90 },
      { name: "Ponkotsu", class: "Hiragana", score: 0 },
      { name: "Techi", class: "Kanji", score: 79 },
      { name: "Memi", class: "Kanji", score: 80 },
      { name: "Saiki", class: "Hiragana", score: 80 },
      { name: "Kusuo", class: "Hiragana", score: 80 },
      { name: "Midoriya", class: "Hiragana", score: 99 },
      { name: "Bakugo", class: "Kanji", score: 100 },
      { name: "Hachiman", class: "Kanji", score: 70 },
      { name: "Inaba", class: "Hiragana", score: 60 },
      { name: "Iori", class: "Kanji", score: 40 },
      { name: "Yamaha", class: "Hiragana", score: 30 },
      { name: "Honda", class: "Kanji", score: 20 }
    ]),
    null,
    2
  )
);
/*
{
  "Kanji": {
    "pass": [
      {
        "name": "Berisa",
        "score": 90
      },
      {
        "name": "Memi",
        "score": 80
      },
      {
        "name": "Bakugo",
        "score": 100
      }
    ],
    "fail": [
      {
        "name": "Techi",
        "score": 79
      },
      {
        "name": "Hachiman",
        "score": 70
      },
      {
        "name": "Iori",
        "score": 40
      },
      {
        "name": "Honda",
        "score": 20
      }
    ]
  },
  "Hiragana": {
    "pass": [
      {
        "name": "Saiki",
        "score": 80
      },
      {
        "name": "Kusuo",
        "score": 80
      },
      {
        "name": "Midoriya",
        "score": 99
      }
    ],
    "fail": [
      {
        "name": "Ponkotsu",
        "score": 0
      },
      {
        "name": "Inaba",
        "score": 60
      },
      {
        "name": "Yamaha",
        "score": 30
      }
    ]
  }
}
 */
