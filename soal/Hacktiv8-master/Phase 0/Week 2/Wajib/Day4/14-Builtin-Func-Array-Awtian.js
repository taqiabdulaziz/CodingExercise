
function dataHandling2(x) {
    x.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    x.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(x);
    var tanggal = x[3].split('/');
    var bulan = parseInt(tanggal[1]);
  switch(bulan) {
        case 01:   { bulan = 'Januari'; break;}
        case 02:   { bulan = 'Februari'; break;}
        case 03:   { bulan = 'Maret'; break;}
        case 04:   { bulan = 'April'; break;}
        case 05:   { bulan = 'Mei'; break;}
        case 06:   { bulan = 'Juni'; break;}
        case 07:   { bulan = 'Juli'; break;}
        case 08:   { bulan = 'Agustus'; break;}
        case 09:   { bulan = 'September'; break;}
        case 10:  { bulan = 'Oktober'; break;}
        case 11:  { bulan = 'November'; break;}
        case 12:  { bulan = 'Desember'; break;}
        default: { bulan = 'umad?';}
}
      console.log(bulan);
      tanggal.sort(function(a, b){return b - a});
      console.log(tanggal);
      var tanggal = x[3].split('/');
      var dash = tanggal.join('-');
      console.log(dash);
      var name = x[1].slice(0,14);
      console.log(name);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1898, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */