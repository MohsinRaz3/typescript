

function hello(name:string, ...aka: number[]):string{  // after func parameter ):string[] shows return value type
    if( aka === undefined){

    console.log(`Hello ${name}`);
    }
    else{
       console.log(`Hello ${name + " " + aka }`);

    }
    return name
}

hello("Mohsin")