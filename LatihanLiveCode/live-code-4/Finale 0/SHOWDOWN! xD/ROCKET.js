/*
/*

=====================
Bacteria Reproduction
=====================

Nama: Awtian Akbar 🐼

[DESCRIPTION]
Teman kamu sedang melakukan penelitian sains. Awalnya ia menyimpan 1
bakteri di dalam sebuah kotak. Setiap harinya, setiap bakteri akan
membagi menjadi N bakteri. Setelah itu, teman kamu akan menambahkan B bakteri
ke dalam kotak itu. Bantulah temanmu mencari jumlah bakteri pada hari ke-i!

[INSTRUCTION]
Tersedia 3 parameter sebagai inputan yang merupakan sebuah interger:
	1) N : jumlah bakteri setelah pembagian satu bakteri
	2) B : jumlah bakteri yang ditambahkan ke dalam kotak setiap hari
	3) i : hari yang kita ingin tahu jumlah bakterinya
Output: jumlah bakteri pada hari ke-i

[EXAMPLE]
1) N = 2, B = 3, i = 3		--> 13

[CONSTRAINT]
Wajib menggunakan metode rekursif!
*/

const bacteriaReproduction = (N, B, i) => i === 1 ? 1 : B + (N*bacteriaReproduction(N, B, i-1));

console.log(bacteriaReproduction(3, 4, 1));	// 1
console.log(bacteriaReproduction(1, 3, 5));    // 13
console.log(bacteriaReproduction(5, 2, 3));    // 37
console.log(bacteriaReproduction(5, 0, 5));    // 625