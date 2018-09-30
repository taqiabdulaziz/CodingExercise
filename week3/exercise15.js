/*eslint-disable*/
function groupAnimals(animals) {
  var newArr = animals.sort();
  var lastChar = "a";
  var lastChar2 = "a";
  var counter = 0;
  var counter2 = 0;
  var groupArr = [];
  var lastArr = [[]];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].charAt(0) == lastChar) {
      groupArr.push([newArr[i]]);
      lastChar = newArr[i].charAt(0);
    } else if (newArr[i].charAt(0) != lastChar) {
      groupArr.push([newArr[i]]);
      counter += 1;
      lastChar = newArr[i].charAt(0);
    }
  }

  for (let j = 0; j < groupArr.length; j++) {
    if (lastArr[j] == "") {
      lastArr[j].push(groupArr[j][0]);
    } else if (lastArr[counter2][0].charAt(0) == groupArr[j][0].charAt(0)) {
      lastArr[counter2].push(groupArr[j][0]);
    } else if (lastArr[counter2][0].charAt(0) != groupArr[j][0].charAt(0)) {
      counter2 += 1;
      lastArr.push(groupArr[j]);
    }
  }

  return lastArr.sort();
  //HARDDDDDDDDDDDDDDD
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
