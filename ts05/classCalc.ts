class Calculatar{
    // firstInput!: number;
    // secondInput!: number;

    // constructor(x: number, y: number){
    //     this.firstInput = x;
    //     this.secondInput = y;
    // }

    add(x: number, y:number){
        return x + y
    }
    sub(x: number, y: number){
        return x - y
    }
    mul(x: number, y: number){
        return x * y 
    }
    div(x: number, y: number){
        return x / y
    }
}

let mathFun = new Calculatar()

console.log(mathFun.add(9,3))