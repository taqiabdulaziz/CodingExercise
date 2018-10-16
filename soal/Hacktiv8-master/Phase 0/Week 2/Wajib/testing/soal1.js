// Competencies: Mathematical Operation and Conditionals
/*
===============
Cafe Visitation
===============

Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variabel name, age, dan money. Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.
Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice. Jika age 17 tahun keatas, ia hanya boleh memesan susu.
Step 3. Juice memiliki harga 50000, sedangkan susu memiliki harga 100000. Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar sesuai harga minuman menggunakan. Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.". Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.

Ketentuan
=========
Diberikan variable name, age, dan money. Dipersilahkan mengganti nilai dari 3 variable tersebut, sesuai data type yang cocok, namun dilarang mengganti nama variable.
*/

// SKELETON CODE (Code Sample)

var name= `awtian`; // silakan berikan nilai
var age = 23; // silakan berikan nilai
var money= 70000; // silakan berikan nilai

// Tulis kode selanjutnya disini
// Soal 1 



var pesan= ``;
var harga= ``;

if (name == '') {
    console.log("Anda tidak boleh masuk!")
}

else {
    if (age <= 17) {
        console.log(`Anda hanya bisa memesan Juice seharga 50.000`);
        var pesan = `Juice`;
        var harga = 50000;
    }
    else if (age > 17) {
        console.log(`Anda hanya bisa memesan Susu seharga 100.000`);
        var pesan = `Susu`;
        var harga = 100000;
    }

    if (money < harga) {
        console.log(`Uang tidak cukup, anda harus pulang...`);
    }
    else {
        var money = money - harga;
        console.log(`Anda bisa pesan minum (${pesan}), sisa uang anda ${money}`)
    }
}