var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

var x = input.length;

for (i=0; i < x; i++) {
    console.log(`Nomor ID: ${input[i][0]}`)
    console.log(`Nama Lengkap: ${input[i][1]}`)
    console.log(`TTL: ${input[i][2]} ${input[i][3]}`)
    console.log(`Hobi: ${input[i][4]}`)
};



    