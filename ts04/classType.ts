class Car2 {
    color : string;
    readonly owner!: string     // optional property ever used && readomly we can't reassign another value

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

let myCar = new Car2("Purple", "Mohsin") //instance
let AhsanCar = new Car2("Red", "Ahsan")

let Alex: Car2;                        // Class as Type

Alex = {
    color: "Pink",
    owner: "Sir Imran",
    start(state:boolean){ return "Start engine"}
}



