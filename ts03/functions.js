"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name, ...aka) {
    if (aka === undefined) {
        return `Hello ${name}`;
    }
    else {
        return `Hello ${name + " " + aka.join(" ")}`;
    }
}
let greetin = hello("Mohsin", "raz", "kahn");
console.log(greetin);
//Anonymous arrow Function
let AnonFun = (fName, lName) => {
    return fName + lName;
};
let varF = AnonFun("heee", "bee");
console.log(varF);
