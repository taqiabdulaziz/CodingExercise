var nama = '';
var peran = 'Ksatria';

if (!nama && !peran) {
    console.log("Nama harus diisi")
} else if (nama && !peran) {
    console.log("halo " + nama + ". Pilih peranmu untuk memulai game!")
} else if (nama && peran) {
    if (peran == "Ksatria") {
        console.log("Selamat datang di Dunia Proxytia, " + nama)
        console.log("Halo Ksatia " + nama + ", kamu dapat menyerang dengan senjatamu!")
    } else if (peran == "Tabib") {
        console.log("Selamat datang di Dunia Proxytia, " + nama)
        console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka")
    } else if (peran == "Penyihir") {
        console.log("Selamat datang di Dunia Proxytia, " + nama)
        console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu")
    }
} else {
    //TAMBAHAN KALAU NAMA TIDAK DIISI DAN PERAN DIISI
    console.log("Halo " + peran + ", nama harus diisi!")
}

