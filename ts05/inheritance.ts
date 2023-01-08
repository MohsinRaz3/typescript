abstract class Country{

    public name: string;
    public language: string;
    public population: number;
    public growthRate: number;
    private _atomicCode: number;    // private data 
    private _leader: string;
    public planet = "Earth";     // EArth value will get all objects by default
    public religion: string;   


    constructor(
        name: string,
        language: string,
        population: number,
        growthRate: number,
        _atomicCode: number,
        _leader: string,
        religion: string
    ){
        this.name = name;
        this.language = language;
        this.population = population;
        this.growthRate = growthRate;
        this._atomicCode = _atomicCode;
        this._leader = _leader;
        this.religion = religion;
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

    constructor(name: string, language: string, population: number, growthRate: number, _atomicCode: number, _leader: string, religion: string){
        super(name, language, population, growthRate, _atomicCode,_leader, religion)
    }
    public populationGrowthRate(): number {        // abstract method implementation here
        this.population = this.population * (1 + this.growthRate /100)
        return this.population
    }
}

let Afg = new IslamicCountry("Afghanistan","Pashto",120000,2.3, 420,"talban","islam")  // object 1
console.info(Afg);

let Pak = new IslamicCountry("Paxtn","urdu",2220000,3, 302,"crim minstr","islam")        // object 2
console.info(Pak);

