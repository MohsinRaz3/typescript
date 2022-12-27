"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehical {
    color = "purple";
    start(state) {
        if (state === true) {
            console.log("Start engine");
        }
        else {
            console.log("Shutting down engine");
        }
    }
}
let myCar = new Vehical();
myCar.start(true);
