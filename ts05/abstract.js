"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
}
//let myBase = new Base()  // CAn't create Object outta abstract class and method
class Derived extends Base {
    getName() {
        return "first method"; // implementation can only be in derived/child class
    }
    myName() {
        return "second method";
    }
}
//let baseObj = new Base()  We cant create object of abstract class
let absObj = new Derived();
console.log(absObj.getName());
