"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myCallback(text) {
    console.log("inside myCallback" + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
    // return initialText
}
callingFunction(" callingText", myCallback);
