/*eslint-disable*/
function TimeConvert(num) {
  numString = String(num);
  var menit = (Number(numString.slice(0, numString.length - 1)) * 10) / 60;
  var detik = num % 60;

  if (num.toString().length == 2) {
    return "0:" + num;
  }

  return Math.floor(num / 60) + ":" + (num % 60);
}

// keep this function call here
TimeConvert(readline());

