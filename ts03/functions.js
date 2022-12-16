"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name, ...aka) {
    if (aka === undefined) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log(`Hello ${name + " " + aka}`);
    }
    return name;
}
hello("Mohsin");
