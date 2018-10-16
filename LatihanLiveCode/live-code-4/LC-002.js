/*
==================================
Array Mastery: Separate Them
==================================

Nama:________

[INSTRUKSI]
Setiap student di HACKTIV8 memiliki tim project dengan komposisi satu tim berdua. 

Function separateThem akan menerima satu parameter berupa array yang berisi string pasangan nama student dengan format 'NAMA_STUDENT_1 dan NAMA_STUDENT_2'.
Function ini akan memecah setiap kelompok menjadi per orang satu per satu.
[CONTOH]
input: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri']

input: ['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhie']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rodhie']

input: []
output: []

*/

function separateThem(students) {
  // Code here
  let splitted = [];
  for (let i = 0; i < students.length; i++) {
    let temp = [];
    temp.push(students[i].split(' dan '));
      for (let j=0; j< temp[0].length; j++) {
        splitted.push(temp[0][j])
      }

  }
  return splitted
}
  
// TEST CASES
console.log(separateThem(['Budi dan Badu'])); // ['Budi', 'Badu']
console.log(separateThem(['Budi dan Michael'])); // ['Budi', 'Michael']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhes'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rhodes']
console.log(separateThem([])); // []