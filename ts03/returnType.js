"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let returnType; // either return string or just assign num 
returnType = function () { return "ss"; }; // correct
//returnType = function (): number {return 7}  //throws error
//returnType = "6" //throws error
returnType = 6; // correct
