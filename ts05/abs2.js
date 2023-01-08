"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    name;
    language;
    population;
    growthRate;
    constructor(name, language, population, growthRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.growthRate = growthRate;
    }
}
class IslamicCountry extends Country {
    constructor(name, language, population, growthRate) {
        super(name, language, population, growthRate);
    }
    populationGrowthRate() {
        this.population = this.population * (1 + this.growthRate / 100);
        return this.population;
    }
}
let Afg = new IslamicCountry("Afghanistan", "Pashto", 120000, 2.3);
console.info(Afg);
let Pak = new IslamicCountry("Paxtn", "urdu", 2220000, 3);
Pak.populationGrowthRate();
console.info(Pak);
Pak.populationGrowthRate();
console.info(Pak);
