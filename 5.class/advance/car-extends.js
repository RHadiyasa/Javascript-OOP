import Vehicle from "./vehicle.js";

// inheritance
class Car extends Vehicle {
  // PascalCase

  // Kita boleh tidak menuliskan attribute, dan langsung di constructornya
  // tapi untuk private field, dia harus di declare
  carName;
  carBrand;
  // private field
  #engineNumber;
  #owner;

  constructor(
    vehicleType,
    engineType = "4-cylinders",
    isElectric = false,
    carBrand,
    carName,
    engineNumber,
    owner
  ) {
    super(vehicleType, engineType, isElectric);
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

  // overriding method
  speeding() {
    console.log(
      `Vehicle engine is ${this.engineType}, and ${this.vehicleType} is speeding` // ${this.speeding()} -> memanggil method speeding akan mengakibatkan maximum call stack, recursive
    );
  }

  // Encapsulation
  getEngineNumber() {
    return this.#engineNumber;
  }

  setEngineNumber(engineNumber) {
    this.#engineNumber = engineNumber;
  }
}

// menggunakan keyword new
const yaris = new Car(undefined, "V4", false, "Toyota", "Yaris", 123123, "Rafi");

yaris.carBrand = "Honda";
yaris.setEngineNumber("56789");
console.log(
  `Mobil ${yaris.carBrand} ${
    yaris.carName
  } dengan nomor mesin ${yaris.getEngineNumber()} | Tipe kendaraan : ${
    yaris.vehicleType
  } | Mesin : ${yaris.engineType} | Electric : ${yaris.isElectric}`
);

yaris.speeding();
yaris.sayHello();

// membuat object secara ad-hoc / spontan
const bmw = {
  carName: "M3 Series",
  carBrand: "BMW",
};

// __ proto__ untuk mengakses prototype
// let animal = {
//     makesNoise: function() {
//       return "generic noise";
//     }
//   }

//   let dog = {
//     makesNoise: function() {
//       return "woof!";
//     }
//   }

//   dog.__proto__ = animal;

//   console.log(dog.makesNoise()); // Outputs: woof!
