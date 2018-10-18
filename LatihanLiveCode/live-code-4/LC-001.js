/*eslint-disable*/
/*
=======================================
Array Mastery: Summarize Payment Types
=======================================

Nama:________

[INSTRUKSI]
Seorang kasir sedang mendata jumlah transaksi yang menggunakan Cash, Debit, atau Credit.

Function paymentSummary akan menerima satu parameter berupa array yang berisikan string, yang isinya antara 'CASH', 'DEBIT', atau 'CREDIT'.
Apabila jumlah 'CASH' dalam array lebih besar dari jumlah 'DEBIT' dan 'CREDIT', maka function akan mereturn "MOSTLY CASH".
Apabila jumlah 'DEBIT' dalam array lebih besar dari jumlah 'CASH' dan 'CREDIT', maka function akan mereturn "MOSTLY DEBIT".
Apabila jumlah 'CREDIT' dalam array lebih besar dari jumlah 'CASH' dan 'DEBIT', maka function akan mereturn "MOSTLY CREDIT".

Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "I AM NOT SURE!";

Mudah bukan? :)
*/

function paymentSummary(paymentTypes) {

}
  
// TEST CASES
console.log(paymentSummary(['CASH', 'CASH', 'DEBIT'])); // "MOSTLY CASH"
console.log(paymentSummary(['CREDIT', 'CASH', 'DEBIT', 'CREDIT'])); // "MOSTLY CREDIT"
console.log(paymentSummary(['DEBIT', 'DEBIT', 'DEBIT'])); // "MOSTLY DEBIT"
console.log(paymentSummary(['CASH'])); // "MOSTLY CASH"
console.log(paymentSummary([])); // "I AM NOT SURE!"
