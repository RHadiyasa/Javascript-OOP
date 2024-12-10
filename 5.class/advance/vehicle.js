class Vehicle {
  vehicleType;
  engineType;
  isElectric;

  // assign default value to constructor
  constructor(vehicleType, engineType = "4-cylinders", isElectric = false) {
    // validasi parameter constructor
    if (typeof isElectric === "string") {
      this.isElectric = isElectric.toLowerCase() === "true";
      // "Listrik" === "true" --> false
      // "false" === "true" --> false
      // "true" === "true" --> true
      // isElectric.toLowerCase() === "true"; -> HASILNYA BOOLEAN
    } else if (typeof isElectric !== "boolean") {
      this.isElectric = false;
    } else {
      this.isElectric = isElectric;
    }

    this.vehicleType = vehicleType;
    this.engineType = engineType;
  }

  speeding() {
    console.log("Vehicle is speeding");
  }
}

const car = new Vehicle("Car", "V8", true);

console.log(Vehicle.prototype);
// console.log(car);

export default Vehicle;

