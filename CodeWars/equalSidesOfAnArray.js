/*eslint-disable*/
//------------------------FIND EVEN INDEX------------
function findEvenIndex(arr) {
  var leftSide;
  var rightSide;

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      leftSide = 0;
      rightSide = totalRight(arr.slice(i + 1));
    } else if (i == arr.length - 1) {
      rightSide = 0;
      leftSide = totalLeft(arr.slice(0 + 1, arr.length - 1));
    } else {
      leftSide = totalLeft(arr.slice(0, i));
      rightSide = totalRight(arr.slice(i+1, arr.length ));
    }

    if (leftSide == rightSide) {
        return i
    }
    // console.log(leftSide + " | " + rightSide);-=
  }

  if (leftSide != rightSide) {
      return -1
  }




  //FUNCTION
  function totalLeft(l) {
    var totL = 0;
    l.forEach(element => {
      totL += element;
    });

    return totL;
  }

  function totalRight(r) {
    var totR = 0;

    r.forEach(element => {
      totR += element;
    });

    return totR;
  }
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
