class Vehical2 {
    color : string;
    readonly owner!: string     // optional property ever used && readonly we can't reassign another value

    constructor(rang: string,owner: string){
        this.color = rang;
        this.owner = owner;

    }

    start(state: boolean){
        if(state === true){
            return "Start engine"   
        }else {
            return "Shutting down engine"    
        }
    }
}

let myCar = new Vehical2("Purple", "Mohsin") //instance
let AhsanCar = new Vehical2("Red", "Ahsan")

console.log(`${myCar.color} :  ${myCar.owner} ${myCar.start(true)}`);      //MyCar
 
console.log(`${AhsanCar.color}:  ${AhsanCar.owner} ${AhsanCar.start(false)} `);  // Ahsan's Car

