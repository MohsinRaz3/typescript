class Car3 {
    color : string;
    readonly owner!: string;     // optional property ever used && readomly we can't reassign another value

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

class Mercedes extends Car3{   // Entends Car3 to Mercedes

    constructor(rang: string, owner: string,alloyWheels: boolean){
        super(rang, owner)                    // Call super to OVERRIDE Constructor
        this.alloyWheels = alloyWheels

    }
    alloyWheels: boolean;
    suspensions = true;
}

let myNewCar = new Mercedes("purple","Mohsin", false)

console.log(`AlloyWheels: ${myNewCar.alloyWheels}  CarColor: ${myNewCar.color}  EnigneState: ${myNewCar.start(false)}`);
