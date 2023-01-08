"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculatar {
    // firstInput!: number;
    // secondInput!: number;
    // constructor(x: number, y: number){
    //     this.firstInput = x;
    //     this.secondInput = y;
    // }
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    mul(x, y) {
        return x * y;
    }
    div(x, y) {
        return x / y;
    }
}
let mathFun = new Calculatar();
console.log(mathFun.add(9, 3));
