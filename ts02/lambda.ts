let myadd : (a:number, b:number) => number = (a,b)=> a+b;

function builde(fname:string, ...restArr: string[]){
    console.log(  fname + "-" + restArr.join("-"));
}
builde("Mohsin","raz","khan","afridi")