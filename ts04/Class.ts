class Car{
    name: string;
    model: number;
    company: string ;
    _lisence!: number;  // read or update

    constructor(name:string, model:number, company:string){
        this.name = name;
        this.model = model;
        this.company = company;
    }

    get lisence(){                      // Getter setter
        return this._lisence;
    }

    set lisence(val: number){
        this._lisence = val
    }

    //function that do stuff behaviour
    doStuff(){
        return `${this.name} ${this.model}, ${this.lisence}`
    }
}

let Benz = new Car("Benz",122,"mecidez") // INSTANCE
let Cultus = new Car("Cultus", 321, "toyota")

Benz.lisence = 678
Cultus.lisence = 786

console.log(Benz.doStuff());
console.log(Cultus.doStuff());


