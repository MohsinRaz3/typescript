"use strict";
let myadd = (a, b) => a + b;
function builde(fname, ...restArr) {
    console.log(fname + "-" + restArr.join("-"));
}
builde("Mohsin", "raz", "khan", "afridi");
