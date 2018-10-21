/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  // only code here..
  
 
}


var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/


// function unik(num){
//   var hasil = [num[0]]
//   for(var i = 1; i < num.length; i++){
//     var same = false;
//     for(var j = 0; j < hasil.length; j++){
//       if(num[i] === hasil[j]){
//         same = true
//         break; 
//       } else {
//         same = false
//       }
//     }
//     if (same === false) {
//       hasil.push(num[i])
//     }
//     // console.log(hasil)
//   }
//   return hasil.sort()
// }

// console.log(unik([2, 2, 1, 4, 6, 6, 8, 8, 1, 2])) // 1, 2, 4, 6, 8


  // var result= []
  // for(var i=0;i<studentGrades.length;i++){
  //   var tampung = {}
  //   if(result[studentGrades[i].classCode] === undefined){
  //     result[studentGrades[i].classCode] = studentGrades[i].classCode
  //   }
  //   result[studentGrades[i].classCode] = {classCode: studentGrades[i].classCode, passed:[], failed:[]}
    
    // if(studentGrades[i].score >= 70 && studentGrades[i].classCode === result[studentGrades[i].classCode]){
    //   result[studentGrades[i].classCode].passed.push(studentGrades[i].name)
    // }else if(studentGrades[i].score < 70 && studentGrades[i].classCode === result[studentGrades[i].classCode]){
    //   result[studentGrades[i].classCode].failed.push(studentGrades[i].name)
    // }

    // if(studentGrades[i].classCode === result[studentGrades[i].classCode] && studentGrades[i].score >= 70){
    //   console.log(result[studentGrades[i].classCode])
    //   result[studentGrades[i].classCode].passed.push(studentGrades[i].name)
    // }else if(studentGrades[i].classCode === result[studentGrades[i].classCode] && studentGrades[i].score >= 70){
    //   console.log(result[studentGrades[i].classCode])
    //   result[studentGrades[i].classCode].failed.push(studentGrades[i].name)
    // }
      // if(studentGrades[i].score >= 70){
        // result[studentGrades[i].classCode].passed.push(studentGrades[i].name)
      // }else if(studentGrades[i].score < 70){
        // result[studentGrades[i].classCode].failed.push(studentGrades[i].name)
      // }
    