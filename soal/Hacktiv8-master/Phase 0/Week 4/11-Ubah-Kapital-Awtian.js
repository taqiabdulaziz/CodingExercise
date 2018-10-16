function ubahKapital(kalimat) {
    // you can only write your code here!
    var arr = kalimat.split(' ');
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split('');
        temp[0] = temp[0].toUpperCase();
        arr[i] = temp.join('');
        }
    kalimat = arr.join(' ');
    return kalimat;
    }

  
  // TEST CASES
  console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
  console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
  console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
  console.log(ubahKapital('i have a dream')); // I Have A Dream
  console.log(ubahKapital('coding is fun')); // Coding Is Fun