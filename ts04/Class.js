"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    name;
    model;
    company = "bENZ";
    doStart() {
        return "car is starting";
    }
    doBreak() {
        return "Car is stopping!";
    }
    doStop() {
        return "Car is stopped";
    }
}
let Benz = new Car(); // INSTANCE
Benz.name = "Mercidez";
Benz.model = 123;
Benz.company = "Benz mercidez";
console.log(Benz.name);
console.log(Benz.doBreak());
