class Car {
    constructor(merek, harga, warna, bensin, roda){
        this.merek = merek;
        this.harga = harga;
        this.warna = warna;
        this.bensin = bensin;
        this.roda = roda;
    }
    
    tampilkanSpesifikasi() {
      return `Mobil saya bermerek ${this.merek} dengan harga ${this.harga} berwarna ${this.warna}, bensinnya ${this.bensin}, dan beroda ${this.roda}.`;
    }
    jualMobil() { return (`Harga: ${this.harga*0.8}`);
    }
  }
  
  let elon = new Car(`testly`, 1000000000, `white`, `listrik`, 4);
  console.log(elon.tampilkanSpesifikasi())
  console.log(elon.jualMobil())
  