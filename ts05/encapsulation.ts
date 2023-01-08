abstract class Country{

    public name: string;
    public language: string;
    public population: number;
    public growthRate: number;
    private _atomicCode: number;   // private data 
    private _leader: string;


    constructor(
        name: string,
        language: string,
        population: number,
        growthRate: number,
        _atomicCode: number,
        _leader: string,
    ){
        this.name = name;
        this.language = language;
        this.population = population;
        this.growthRate = growthRate;
        this._atomicCode = _atomicCode;
        this._leader = _leader;
    }
    abstract populationGrowthRate(): number   // abstract method

    public get atomicCode(): number{        // (used getter to access private data)
        return this._atomicCode
    }

    public set newLed(newLeader: string){ // (used setter to update private data)
        this._leader = newLeader;
    }
}

class IslamicCountry extends Country{

    constructor(name: string, language: string, population: number, growthRate: number, _atomicCode: number, _leader: string){
        super(name, language, population, growthRate, _atomicCode,_leader)
    }
    public populationGrowthRate(): number {        // abstract method implementation here
        this.population = this.population * (1 + this.growthRate /100)
        return this.population
    }
}

let Afg = new IslamicCountry("Afghanistan","Pashto",120000,2.3, 420,"talban")  // object 1
console.info(Afg);

let Pak = new IslamicCountry("Paxtn","urdu",2220000,3, 302,"crim minstr")        // object 2
console.info(Pak);

// We will have access of private variable throught getter function
console.log(Pak.atomicCode);

Afg.newLed = "imbrn khan"    // used setter medthod to upate data
Pak.newLed = "asim bunir"

console.info(Afg.atomicCode);
