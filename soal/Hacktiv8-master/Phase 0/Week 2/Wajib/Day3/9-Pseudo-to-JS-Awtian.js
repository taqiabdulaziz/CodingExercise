//pembilang penyebut

var nama= "awtian";
var pembilang= 3;  
var penyebut= 5;

var hasil = pembilang/penyebut

console.log(`Halo ${nama}, ${pembilang} dibagi ${penyebut} adalah sama dengan ${hasil}`)

//luas segitiga

var alas= 3;
var tinggi= 10;
var luas= alas*tinggi/2;

console.log(`Luas Segitiga: ${luas}`)

//kabisat
var tahun= 2002;

if(tahun%4==0) {
    if(tahun%100!=0) {
        console.log(`${tahun} adalah tahun kabisat`);
    }
    
    else if(tahun%400==0){
        console.log(`${tahun} adalah tahun kabisat`);
        }
  
    else {
        console.log(`${tahun} adalah bukan tahun kabisat`)
        };
}

else {
    console.log(`${tahun} adalah bukan tahun kabisat`)
}


