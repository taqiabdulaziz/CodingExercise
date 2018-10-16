function targetTerdekat(arr) {
  // you can only write your code here!
  var oPlace;
  var xPlaces = [];

  //o finder
  for (var i = 0; i < arr.length; i++) {
   if (arr[i] === 'o') {
      oPlace = i;
   }
  }
  //x finder
  for (var k = 0; k < arr.length; k++)  {
    if (arr[k] === 'x') {
      xPlaces.push(k);
    }
  }
  // no x 
  if (xPlaces.length === 0) {
    return 0
  }
  //jarak
  var jarak = [];
  for (var l = 0; l < xPlaces.length; l++) {
    var jarakIndiv= xPlaces[l] - oPlace;
    if(jarakIndiv<0) jarakIndiv *=-1;
    jarak.push(jarakIndiv)
  }
  jarak = jarak.sort(function(a, b){return a - b})
  return jarak[0];
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2