/*eslint-disable*/
function sorting(arrNumber) {
  //TANPA FUNGSI SORT
  var arrTemp = [];
  var counter = 0;
  while (counter < arrNumber.length) {
    for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] >= arrNumber[i + 1]) {
        var a = arrNumber[i + 1];
        arrNumber[i + 1] = arrNumber[i];
        arrNumber[i] = a;
      }
    }
    counter += 1;
    arrTemp.unshift(arrNumber[arrNumber.length - counter]);
  }

  return arrTemp;
}

function getTotal(arrNumber) {
  var counter1 = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == arrNumber[arrNumber.length - 1]) {
      counter1 += 1;
    }
  }
  if (arrNumber == '') {
    return ""  
  } else {
    return "Angka paling besar adalah " + arrNumber[arrNumber.length - 1] + " dan jumlah kemunculan sebanyak "+ counter1 + " kali";
  }
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

