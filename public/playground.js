// More classes
// class Car {
//   alertBrand() {
//     console.log('Ford')
//   }
// }

// const car = new Car();

// car.alertBrand();

class Car {
  constructor() {
    this.wheels = 4;
    this.type = 'Hatchback';
  }
}
class Ford extends Car {
  constructor() {
    super() // Keyword - Used for add new constructor
    this.glasses = 6;
  }
}
const car = new Car();
const ford = new Ford();
// console.log(ford.wheels);
// console.log(ford.glasses);
