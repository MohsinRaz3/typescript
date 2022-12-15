"use strict";
//let funType: (name: string, nickName?: string[]) => string;   //we declare variable that stores a function that will return string value
Object.defineProperty(exports, "__esModule", { value: true });
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
