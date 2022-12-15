

function hello(name:string, ...aka: string[]):string[]{  // after func parameter ):string[] shows return value type
    if( aka === undefined){
    console.log(`Hello ${name}`);
    }
    else{
       console.log(`Hello ${name + " " + aka }`);

    }
    return aka
}

hello("Mohsin", "kahn","afridi")