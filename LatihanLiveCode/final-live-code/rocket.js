/**
  **********
  HOURGLASS
  **********

  Buatlah sebuah function bernama hourglass. Function hourglass adalah sebuah
  function yang menerima sebuah parameter berupa number dengan asumsi nilai
  parameternya minimal 3. Function akan mereturn string yang memiliki element
  di dalamnya berupa simbol '#' yang nantinya berbentuk jam pasir/hourglass.


  RULES:
**/

function hourglass(num) {
  if (num < 3){
    return 'Minimum parameter is 3';
  }
  var result = '';
  var space = 0;
  var length = num + num -1;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < length; j++) {
      if (j < space) {
        result += ' ';
      }
      else {
        result += '#';
      }
    }
    space++;
    length--;
    if (i < num - 1) {
      result += '\n';
    }
    console.log(i);
    console.log(' '+length);
    console.log('  '+space);
  }
  length++;
  space--;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < length; j++) {
      if (i > 0 && j < space) {
        result += ' ';
      }
      else if (i > 0){
        result += '#';
      }
    console.log(i);
    console.log(' '+length);
    console.log('  '+space);
    }
    length++;
    space--;
    if (i < num - 1) {
      result += '\n';
    }
  }
  return result;
}
// BELOM SELESAI
// function hourglass(num) {
//   if (num < 3){
//     return 'Minimum parameter is 3';
//   }
//   var result = '';
//   var length = num + num-1;
//   var space = 0;
//   var mid = length/2;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (j < space) {
//         result += ' ';
//       }
//       else {
//         result += '#';
//       }
//     }
//     if (i <= mid) {
//       space++;
//       length--;
//     }
//     else {
//       space--;
//       length++;
//     }
//     console.log(i);
//     console.log(' '+length);
//     console.log('  '+space);
//     result += '\n';
//   }
//   return result;
// }

console.log(hourglass(2)); //Minimum parameter is 3

console.log(hourglass(4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

console.log(hourglass(5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/
