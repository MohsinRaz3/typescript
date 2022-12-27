"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car4 {
    color;
    owner; // optional property ever used && readomly we can't reassign another value
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
class Mercedes extends Car4 {
    constructor(rang, owner, alloyWheels) {
        super(rang, owner); // Call super to OVERRIDE Constructor
        this.alloyWheels = alloyWheels;
    }
    alloyWheels;
    suspensions = true;
    start(state) {
        if (state === true) {
            return "Start mercs engine";
        }
        else {
            return "Shutting down mercs engine";
        }
    }
}
let myNewCar = new Mercedes("purple", "Mohsin", false);
console.log(`AlloyWheels: ${myNewCar.alloyWheels}  CarColor: ${myNewCar.color}  EnigneState: ${myNewCar.start(true)}`);
