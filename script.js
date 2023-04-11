class Car {
    constructor(brand, model, currentFuel, fuelFor1Km, millage) {
      this.brand = brand;
      this.model = model;
      this.cariBenzin = currentFuel;
      this.benzin1kmUcun = fuelFor1Km;
      this.gedilenYol = millage;
    }
    drive(km) {
      const ehtiyacOlan = km * this.benzin1kmUcun;
      if (this.cariBenzin >= ehtiyacOlan) {
        this.cariBenzin -= ehtiyacOlan;
        this.gedilenYol += km;
        console.log(`gedilen yol ${km} km. umumi yol ${this.gedilenYol} km ve benzin miqdari  ${this.cariBenzin} lite`);
      } else {
        console.log(`Error: lazimi qeder benzin yoxdur ${km} km ucun.`);
      }
    }
  }

const myCar = new Car("Toyota", "Prius", 15, 0.05, 999000);
myCar.drive(123);
console.log(" ")
console.log("===================================")
console.log(" ")
myCar.drive(456789);