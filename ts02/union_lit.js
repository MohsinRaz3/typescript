"use strict";
let myName;
myName = null;
console.log(`My Name is: ${myName}`);
myName = "mrk";
console.log(`My name is ${myName}`);
let myAge;
myAge = 26;
console.log(`My age is ${myAge}`);
myAge = "khan";
//console.log(myAge.toString()); //convert to string even tho its already
//console.log(myAge.toLowerCase()); //lowerscase
if (myAge === "khan") {
    myAge = myAge.toUpperCase();
    console.log(myAge);
}
if (typeof myAge === "string") {
    myAge = myAge.toLowerCase();
    console.log(myAge);
}
let newName = Math.random() > 0.5 ? "mrk" : null;
//console.log(newName);
if (newName) {
    newName = newName.toUpperCase();
    console.log(newName);
}
let data;
let fullName = "Mohsin";
fullName = 55;
fullName = undefined;
fullName = null;
