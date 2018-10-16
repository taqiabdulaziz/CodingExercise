/*eslint-disable*/
/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join. Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */

function addValidationCode(users) {
  var JSON = [];

  //make json structure
  for (let i = 0; i < users.length; i++) {
    var obj = {
      name: users[i].name,
      validationCode: valCode(users[i]["name"], users[i]["join date"])
    };

    JSON.push(obj);
  }

  function valCode(name, joinDate) {
    var string = [];
    var date = "";

    for (let k = 0; k < name.length; k++) {
      if (k % 2 == 0) {
        string.push(name.charAt(k));
      } else {
        string.splice(k - 1, 0, name.charAt(k));
      }
    }

    for (let l = 0; l < joinDate.length; l++) {
      if (joinDate.charAt(l) != "-") {
        date += joinDate.charAt(l);
      }
    }
    string.push(date);

    return string.join("");
  }

  return JSON;
}

//Test case
console.log(
  addValidationCode([
    {
      name: "Antonio",
      "join date": "09-08-2018"
    },
    {
      name: "Banderaz",
      "join date": "10-08-2018"
    }
  ])
);
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
console.log(
  addValidationCode([
    {
      name: "Cecile",
      "join date": "01-02-2018"
    },
    {
      name: "Dominique",
      "join date": "10-09-2018"
    }
  ])
);
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
console.log(addValidationCode([]));
/**
 Hasil Output
 []
 */
