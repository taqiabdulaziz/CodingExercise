//tugas 3
var bintang = "";

for(var i=1; i<= 10; i++) {
    for (var i2=0; i2 <= i; i2++) {
        bintang = bintang + "*";
    }
    console.log(bintang);
    bintang = "";
}