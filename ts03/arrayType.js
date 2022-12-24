"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1st Example
let arrType; // an array it can either have number or string values
arrType = [1, 2, 3, "mrk"];
// 2nd Example
let NoOfStudentsBatch1 = [1400, 300, 400, 400];
let AllBatches = [
    NoOfStudentsBatch1,
    [1200, 200, 300, 300],
    [1000, 100, 200, 200] // third batch
];
console.log(AllBatches);
// 3rd Example
let nickNames = ["Mohsin", "coderr", "mrk"];
let numberz = [1, 2];
let favName = [...nickNames, ...numberz]; // spread parameter
console.log(favName); //[ 'Mohsin', 'coderr', 'mrk', 1, 2 ]
// favName = [nickNames,numberz]   OUTPUT:  [ [ 'Mohsin', 'coderr', 'mrk' ], [ 1, 2 ] ]
