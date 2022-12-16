"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let funType;
{ } //we declare variable that stores a function that will return string value
const naam = ["mrk", "raz", "kahn", "afridi"];
function allNickNames(callback) {
    for (let i = 0; i < naam.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return `${naam[index]}`;
}
allNickNames(getNameAt);
