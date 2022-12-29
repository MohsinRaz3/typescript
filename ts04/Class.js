"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    name;
    model;
    company;
    _lisence; // read or update
    constructor(name, model, company) {
        this.name = name;
        this.model = model;
        this.company = company;
    }
    get lisence() {
        return this._lisence;
    }
    set lisence(val) {
        this._lisence = val;
    }
    //function that do stuff behaviour
    doStuff() {
        return `${this.name} ${this.model}, ${this.lisence}`;
    }
}
let Benz = new Car("Benz", 122, "mecidez"); // INSTANCE
let Cultus = new Car("Cultus", 321, "toyota");
Benz.lisence = 678;
Cultus.lisence = 786;
console.log(Benz.doStuff());
console.log(Cultus.doStuff());
