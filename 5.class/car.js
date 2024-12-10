class car {
  brand;
  carName;
  #engineNumber; // private fields

  constructor(brand, carName, engineNumber) {
    this.brand = brand;
    this.carName = carName;
    this.#engineNumber = engineNumber;
  }

  constructor(engineNumber) {
    this.#engineNumber = engineNumber;
  }

  getBrand() {
    return this.brand;
  }

  getCarName() {
    return this.carName;
  }

  getEngineNumber() {
    return this.#engineNumber;
  }
}

const car1 = new car("Toyota", "Yaris", 1230);
// const car2 = new car();
console.log(car1);
// console.log(car2); // undefined
// console.log(car1.engineNumber) // # private fields gabisa diakses
console.log(`Car : ${car1.brand} ${car1.carName} with Engine Number : ${car1.getEngineNumber()}`);
