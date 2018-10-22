/*eslint-disable*/
/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {
  var str = sentence.split(" ")
  var result = []
  var palStr = ""
  for (let i = 0; i < str.length; i++) {
    for (let j = str[i].length -1; j >= 0; j--) {
      palStr+=str[i][j]
      
    }

    if (palStr.toLowerCase() != str[i].toLowerCase()) {
      result.push(str[i])
    }

    palStr = ""
    
  }

  return result

}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
