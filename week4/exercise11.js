/*eslint-disable*/
function changeMe(arr) {
  var actorJSON = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      actorJSON[i] = {
        nama: arr[i][0] + " " + arr[i][1],
        gender: arr[i][2],
        age: checkAge(arr[i][3])
      };
    }
  }

  function checkAge(params) {
    if (params === undefined) {
      return "Invalid Birth Year";
    } else {
      return params;
    }
  }

  if (arr.length == 0) {
    console.log("");
  } else if (arr.length != 0) {
    for (let l = 0; l < arr.length; l++) {
      console.log(l + 1 + ". " + arr[l][0] + " " + arr[l][1]);

      console.log(actorJSON[l]);
    }
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
