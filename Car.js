class Car {
    constructor(merekban, ukuranban, kursi, pintu, tahun, warranty) {
        this.ban = new Tyre(merekban, ukuranban);
        this.kursi = kursi;
        this.pintu = pintu;
        this.tahun = tahun;
        this.warranty = warranty;
        this.nomesin = nomesin();
    }
}
function nomesin() {
    return 'AxxYxxxx-xxxx-4xxx-Yxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (x) {
      let r = Math.random() * 12 | 0,
        v = x == 'x' ? r : (r & 0x0 | 0x9 );
      return v.toString(12).toUpperCase();
    });
  }

  class Tyre {
    constructor(merek, size) {
        this.merek = merek;
        this.size = size;
    }
}

class Avanza extends Car {
    constructor(tahun) {
        super("Dunlop", "20inch", 8, 4, tahun);
        this.varian = "Avanza";
        this.warranty = 4;
    }
}

class Cayla extends Car {
    constructor(tahun) {
        super("GTRadial", "15inch", 6, 4, tahun);
        this.varian = "Cayla";
        this.warranty = 3;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
        this.count = 1;
    }
    static getRandom() {
        return Math.floor(Math.random() * 5 |1);
    }

    produce(tahun) {
        for (let i = 0; i < CarFactory.getRandom(); i++) {
            this.cars.push(new Avanza(tahun, this.count++))
        }
        for (let i = 0; i < CarFactory.getRandom(); i++) {
            this.cars.push(new Cayla(tahun, this.count++))
        }

    }
    
    Garansi(tahunSimulasi){
        console.log('hasil produksi saat ini :');
        this.cars.forEach(element => {
            console.log(`
            No. Mesin : ${element.nomesin}
            Varian : ${element.varian}
            Tahun Pembuatan : ${element.tahun}
            Jumlah Kursi : ${element.kursi}
            Jumlah Pintu : ${element.pintu}
            Spesifikasi Ban : ${element.ban.merek} (${element.ban.size})
            Garansi : ${element.warranty} tahun
            Status Garansi : ${(tahunSimulasi - element.tahun) > element.warranty ? 'expired' : 'active' }
            =====================================================================
            `);
    
        });
    }
}    

let Toyota = new CarFactory();
Toyota.produce(2018);
Toyota.produce(2020);
Toyota.Garansi(2023);