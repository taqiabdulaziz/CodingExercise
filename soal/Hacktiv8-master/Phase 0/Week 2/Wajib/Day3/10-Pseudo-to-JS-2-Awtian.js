//tugas 1
var total= 0;

for (var i=1; i<=100; i++) {
    if (i%2==1) {
        total = total + i;
    }
    else if (i%2 ==0) {
        total = total - i;
    }
}

console.log(`TOTAL: ${total}`)
    
//tugas 2
var pagar = "";

for(var i=1; i<= 10; i++) {
    for (var i2=0; i2 <= 10; i2++) {
        pagar = pagar + "#";
    }
    console.log(pagar);
    pagar = "";
}

//tugas 3
var bintang = "";

for(var i=0; i<= 10; i++) {
    for (var i2=0; i2 <= i; i2++) {
        bintang = bintang + "*";
    }
    console.log(bintang);
    bintang = "";
}