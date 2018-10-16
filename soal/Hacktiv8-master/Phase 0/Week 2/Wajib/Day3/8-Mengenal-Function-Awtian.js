function shoutOut() {
    return `Halo Function!`;
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

function calculateMultiply(x,y) {
    return x*y
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

function processSentence(n,a,ad,h) {
    return `Nama saya ${n}, umur saya ${a} tahun, alamat saya di ${ad}, dan saya punya hobby yaitu ${h}!`
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"