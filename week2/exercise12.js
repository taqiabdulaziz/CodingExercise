/*eslint-disable*/

function konversiMenit(menit) {
  var mnt = Math.floor(menit / 60);
  var dtk;

  if (menit > 60 && menit % 60 != 0) {
    if (menit % 60 <= 9) {
      dtk = "0" + parseInt(menit % 60);
    } else {
      dtk = parseInt(menit % 60);
    }
  } else if (menit == 60 && menit % 60 == 0) {
    dtk = 0;
  } else if (menit < 60) {
    dtk = menit;
  } else if (menit > 60 && menit % 60 == 0) {
    dtk = "00";
  }
  return mnt + ":" + dtk;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
