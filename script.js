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



class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Milk extends Product {
  constructor(name, price, fatPercent) {
    super(name, price);
    this.fatPercent = fatPercent;
  }
}
const milk1 = new Milk("Milka", 2.7, 3);
const milk2 = new Milk("Azer sud", 1.8, 1.8);
const milk3 = new Milk("Milla", 2.3, 0.7);

const milkArray = [milk1, milk2, milk3];

let sumFatPercent = 0;
for (let i = 0; i < milkArray.length; i++) {
  sumFatPercent += milkArray[i].fatPercent;
}
const averageFatPercent = sumFatPercent / milkArray.length;

console.log(`FatPercent-in ededi ortasi ${averageFatPercent} dir.`);