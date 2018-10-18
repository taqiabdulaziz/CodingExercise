/*eslint-disable*/
/**
Array Injector
--------------
Implementasikan function `arrayInjector` untuk menyisipkan `secondData` ke `firstData`.
Diberikan juga parameter tambahan yaitu `index` yang akan digunakan untuk menandakan bahwa
`secondData` akan dimasukkan mulai ke `index`.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']
*/
/*
PSEUDOCODE
CREATE VAR as 'arr'
FOR LOOP FROM 0 as 'j' TO LENGTH OF 'firstdata' SUBTRACT BY 1
    PUSH 'j' INDEX OF 'firstdata' ARRAY TO 'arr'
    END FOR LOOP IF 'j' EQUAL TO (LENGTH OF 'firstdata' SUBTRACT BY 1)

FOR LOOP FROM 0 as 'i' TO LENGTH OF 'secondData' SUBTRACT BY 1    
    REMOVE 0 VALUE FROM INDEX 'index' AND PUSH (LENGTH OF 'secondData' SUBTRACT BY 1 AND SUBTRACT BY 'j') INDEX OF 'secondData' ARRAY TO 'index' INDEX OF 'arr'
    END FOR LOOP IF 'i' EQUAL TO (LENGTH OF 'secondData' SUBTRACT BY 1)

DISPLAY 'arr'
*/
    

function arrayInjector (firstData, index, secondData) {
    var arr = []
    

    for (let j = 0; j < firstData.length; j++) {
    arr.push(firstData[j])    
        
    }

    for (let i = 0; i < secondData.length; i++) {
        arr.splice(index,0,secondData[secondData.length-1-i])
        
    }
    return arr

  }
  
  console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
  // [1, 2, 3, 4, 5, 6, 7]
  
  console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
  // [10, 20, 30, 40, 50, 60, 70]
  
  console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
  // ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']