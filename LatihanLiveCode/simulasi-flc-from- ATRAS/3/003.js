/*eslint-disable*/
/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  var data1 = data.split(",");
  var speed = 0;
  var check = false;

  //IF DATA IS NULL
  if (data == "") {
    return "No data";
  }

  for (let i = 0; i < data1.length; i++) {
    var speedTemp = "";
    for (let j = 0; j < data1[i].length; j++) {
      if (data1[i][j] == ":") {
        check = true
      }
      
      if (check == true) {
        speedTemp += data1[i][j+1]
      }

      if (data1[i][j+1] == " ") {
        check = false
        speedTemp = speedTemp.slice(0,speedTemp.length-1)
      }
      
    }
    


    if (speed == 0) {
      speed = Number(speedTemp);
      
    } 
    if (speed < Number(speedTemp)) {
      speed = Number(speedTemp);
    }
  }

  return speed;

  return data1;
}

console.log(
  highestTopSpeed("Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h")
);
// 180

console.log(highestTopSpeed("Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h"));
200;

console.log(highestTopSpeed("Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h"));
175;

console.log(highestTopSpeed(""));
("No data");
