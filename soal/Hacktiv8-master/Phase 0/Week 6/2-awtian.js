

var transformArrToLowerCase = arr => {
    // Ubah setiap element array menjadi lowercase!
    let reverse = arr.map( every => {
    if(every === every.toLowerCase()) return every.toUpperCase();
    else return every.toLowerCase();
  })
  };
  
  console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

  var filterArrUnder10 = arr => {
    // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
    let filter = arr.filter( angka => {return angka !== 9});

  };
  
  console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

  var reduceFindMaximum = arr => {
    // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  }
  console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
  
  
  

  
  
  
  
  