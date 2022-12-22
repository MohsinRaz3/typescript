

function hello(name: string, ...aka: string[]): string {  // after func parameter ):string[] shows return value type

    if (aka === undefined) {
        return `Hello ${name}`
    } else {
        return `Hello ${name + " " + aka.join(" ")}`
    }
}

let greetin = hello("Mohsin","raz","kahn")
console.log(greetin);


//Anonymous arrow Function

let AnonFun: (fName: string, lName: string) => string = (fName, lName) =>{
        return fName + lName
    }
   let varF = AnonFun("heee","bee")
    console.log(varF);
    