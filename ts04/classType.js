"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car2 {
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
let myCar = new Car2("Purple", "Mohsin"); //instance
let AhsanCar = new Car2("Red", "Ahsan");
let Alex; // Class as Type
Alex = {
    color: "Pink",
    owner: "Sir Imran",
    start(state) { return "Start engine"; }
};
