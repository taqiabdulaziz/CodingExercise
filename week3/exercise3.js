/*eslint-disable*/
function dataHandling(array) {
  var result = "";
  for (let i = 0; i < array.length; i++) {
    result =
      result +
      "\n" +
      "Nomor ID: " +
      array[i][0] +
      "\n" +
      "Nama Lengkap: " +
      array[i][1] +
      "\n" +
      "TTL: " +
      array[i][2] +
      " " +
      array[i][3] +
      "\n" +
      "Hobi: " +
      array[i][4] +
      "\n";
  }
  return result;
}

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

console.log(dataHandling(input));
