function tambahDash(str) {
    // you can only write your code here!
    var arr = str.split('')

    for (var i = 0; i < arr.length-1; i++){
        if (arr[i]%2 === 1 && arr[i+1]%2 === 1) {
            arr[i] = arr[i]+'-';
        }
        else {
            arr[i] = arr[i];
        }
    }
    str = arr.join('');
    return str;
  }
  
  // TEST CASES
  console.log(tambahDash('454793')); // '4547-9-3'
  console.log(tambahDash('1739028')); // '1-7-3-9028'
  console.log(tambahDash('891829')); // '89-1829'
  console.log(tambahDash('10192')); // '101-92'
  console.log(tambahDash('222222')); // '222222'