ffunction angkaPalindrome(num) {
  // you can only write your code here!
  var jalan = true
  var numRev;
  var hasil;

  while (jalan) {
    num++
    var numStrRev = num.toString().split('').reverse().join('');
    if (num == numStrRev) {
      return num
    }

  }  
}

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001


  // dennis
  // function angkaPalindrome(num) {
  //   // you can only write your code here!
  //   //console.log(String(num).length);
  //   var numBalik="";
  //   var i = true;
  //   var result;
  //   // result = num.toString().split('').reverse().join('')
  //   while(i){
  //     num++;
  //     // for(var x =String(num).length-1; x>= 0; x-- ){
  //     //   numBalik += String(num)[x];
  //     // }
  //    // console.log(num)
  //     if(num<9){
  //       i = false
  //       result = num;
  //     }
  //       // console.log(numBalik)
  //        numBalik = num.toString().split('').reverse().join('')
  //      if(String(num) === numBalik){
  //        i = false;
  //       result = num;
  //      }
      
  //  }
  
  // return  result  
      
  //}