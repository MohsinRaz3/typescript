"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    name;
    language;
    population;
    growthRate;
    _atomicCode; // private data 
    _leader;
    constructor(name, language, population, growthRate, _atomicCode, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.growthRate = growthRate;
        this._atomicCode = _atomicCode;
        this._leader = _leader;
    }
    get atomicCode() {
        return this._atomicCode;
    }
    set newLed(newLeader) {
        this._leader = newLeader;
    }
}
class IslamicCountry extends Country {
    constructor(name, language, population, growthRate, _atomicCode, _leader) {
        super(name, language, population, growthRate, _atomicCode, _leader);
    }
    populationGrowthRate() {
        this.population = this.population * (1 + this.growthRate / 100);
        return this.population;
    }
}
let Afg = new IslamicCountry("Afghanistan", "Pashto", 120000, 2.3, 420, "talban"); // object 1
console.info(Afg);
let Pak = new IslamicCountry("Paxtn", "urdu", 2220000, 3, 302, "crim minstr"); // object 2
console.info(Pak);
// We will have access of private variable throught getter function
console.log(Pak.atomicCode);
Afg.newLed = "imbrn khan"; // used setter medthod to upate data
Pak.newLed = "asim bunir";
console.info(Afg.atomicCode);
