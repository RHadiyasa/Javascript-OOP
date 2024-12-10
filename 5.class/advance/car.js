class Car {
  // PascalCase

  // Kita boleh tidak menuliskan attribute, dan langsung di constructornya
  // tapi untuk private field, dia harus di declare
  carName;
  carBrand;
  // private field
  #engineNumber;
  #owner;

  constructor(carBrand, carName, engineNumber, owner) {
    this.carBrand = carBrand;
    this.carName = carName;
    this.#engineNumber = engineNumber;
    this.#owner = owner;
  }

  sayHello = () => {
    console.log(`Halo customer ${this.#getOwner()}`); // panggil private function
  };

  #getOwner = () => {
    // private function
    return this.#owner;
  };

  // Encapsulation
  getEngineNumber() {
    return this.#engineNumber;
  }

  setEngineNumber(engineNumber) {
    this.#engineNumber = engineNumber;
  }
}

// menggunakan keyword new
const yaris = new Car("Toyota", "Yaris", 123456, "Mirza");

yaris.carBrand = "Honda";
yaris.setEngineNumber("56789");
console.log(
  `Mobil ${yaris.carBrand} ${
    yaris.carName
  } dengan nomor mesin ${yaris.getEngineNumber()}`
);

yaris.sayHello();

// membuat object secara ad-hoc / spontan
const bmw = {
  carName: "M3 Series",
  carBrand: "BMW",

  // sayHello() {
  //   console.log(`Halo customer ${this.carBrand}`); // panggil private function
  // },
};

console.log("---- Prototype ----");
// __proto__ -> keyword untuk mengakses prototype
bmw.__proto__ = yaris;

bmw.sayHello();
yaris.sayHello();

