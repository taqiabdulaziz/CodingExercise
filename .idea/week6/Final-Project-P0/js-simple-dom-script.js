
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element


var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

console.log(pageBoxElements);

