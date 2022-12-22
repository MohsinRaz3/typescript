"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addValues(val1, val2) {
    return val1 + val2;
}
console.log(addValues(1, 3));
console.log(addValues("hello", " frens"));
function createDate(dayOrtimestamp, month, year) {
    return month === undefined || year === undefined
        ? new Date(dayOrtimestamp)
        : new Date(year, month, dayOrtimestamp);
}
//console.log(createDate(33));
