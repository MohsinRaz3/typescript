"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehical2 {
    color;
    owner; // optional property ever used && readonly we can't reassign another value
    constructor(rang, owner) {
        this.color = rang;
        this.owner = owner;
    }
    start(state) {
        if (state === true) {
            return "Start engine";
        }
        else {
            return "Shutting down engine";
        }
    }
}
let myCar = new Vehical2("Purple", "Mohsin"); //instance
let AhsanCar = new Vehical2("Red", "Ahsan");
console.log(`${myCar.color} :  ${myCar.owner} ${myCar.start(true)}`); //MyCar
console.log(`${AhsanCar.color}:  ${AhsanCar.owner} ${AhsanCar.start(false)} `); // Ahsan's Car
