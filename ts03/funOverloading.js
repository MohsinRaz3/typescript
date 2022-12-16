"use strict";
//console.log(new Date());
Object.defineProperty(exports, "__esModule", { value: true });
function createDate(dayOrtimestamp, month, year) {
    return month === undefined || year === undefined
        ? new Date(dayOrtimestamp)
        : new Date(year, month, dayOrtimestamp);
}
console.log(createDate(33));
