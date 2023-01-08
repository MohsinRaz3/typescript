abstract class Country{

    public name: string;
    public language: string;
    public population: number;
    public growthRate: number;

    constructor(
        name: string,
        language: string,
        population: number,
        growthRate: number,
    ){
        this.name = name;
        this.language = language;
        this.population = population;
        this.growthRate = growthRate;
    }
    abstract populationGrowthRate(): number
}

class IslamicCountry extends Country{

    constructor(name: string, language: string, population: number, growthRate: number){
        super(name, language, population, growthRate)
    }
    public populationGrowthRate(): number {
        this.population = this.population * (1 + this.growthRate /100)
        return this.population
    }
}

let Afg = new IslamicCountry("Afghanistan","Pashto",120000,2.3)
console.info(Afg);

let Pak = new IslamicCountry("Paxtn","urdu",2220000,3)
Pak.populationGrowthRate()
console.info(Pak);
Pak.populationGrowthRate()
console.info(Pak);


