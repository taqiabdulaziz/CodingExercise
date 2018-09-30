/*eslint-disable*/

function dataHandling2(array) {
  var arr = array;
  var bulan = "";
  var s1 = [];
  var s1_date = [];
  s1 = array[3].split("/");

  for (let i = s1.length - 1; i >= 0; i--) {
    s1_date.push(s1[i]);
  }
  arr.splice(1, 1, arr[1] + "Elsharawy");
  arr.splice(2, 1, "Provinsi " + arr[2]);
  arr.splice(4, 0, "Pria");
  arr.splice(5, 1, "SMA Internasional Metro");

  switch (s1_date[1]) {
    case '01':
    bulan = "Januari"
      break;

    case '02':
    bulan = "Februari"
      break;

    case '03':
    bulan = "Maret"
      break;

    case "04":
    bulan = "April"
      break;

    case "05":
    bulan = "Mei"
      break;

    case "06":
    bulan = "Juni"
      break;

    case "07":
    bulan = "Juli"
      break;

    case "08":
    bulan = "Agustus"
      break;

    case "09":
    bulan = "September"
      break;

    case "10":
    bulan = "Oktober"
      break;

    case "11":
    bulan = "November"
      break;

    case "12":
    bulan = "Desember"
      break;
  }

  console.log(arr);
  console.log(bulan);
  console.log([s1_date[0],s1_date[2],s1_date[1]]);
  console.log([s1_date[2],s1_date[1],s1_date[0]].join("-"));
  console.log(arr[1].slice(0,15));
  
  
  
  
}

var input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
