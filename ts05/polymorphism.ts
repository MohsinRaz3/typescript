 class Country{

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
     populationGrowthRate(): number   {return 3}

    public get atomicCode(): number{        
        return this._atomicCode
    }

    public set newLed(newLeader: string){ 
        this._leader = newLeader;
    }

    public greetings(){
        return "namsate"
    }
}

class IslamicCountry extends Country{

    constructor(name: string, language: string, population: number, growthRate: number, _atomicCode: number, _leader: string, religion: string){
        super(name, language, population, growthRate, _atomicCode,_leader, religion)
    }
    public populationGrowthRate(): number {       
        this.population = this.population * (1 + this.growthRate /100)
        return this.population
    }

    public greetings(){
        return "Assalamoalikum"
    }
}

let Ind = new Country("bharat","Hindi",1520000,4.3, 420,"modi","hindiusm")  // object 1
console.info(Ind.greetings());

let Pak = new IslamicCountry("Paxtn","urdu",2220000,3, 302,"crim minstr","islam")        // object 2
console.info(Pak.greetings());

