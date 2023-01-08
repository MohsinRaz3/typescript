"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    name;
    language;
    population;
    growthRate;
    _atomicCode; // private data 
    _leader;
    planet = "Earth"; // EArth value will get all objects by default
    religion;
    constructor(name, language, population, growthRate, _atomicCode, _leader, religion) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.growthRate = growthRate;
        this._atomicCode = _atomicCode;
        this._leader = _leader;
        this.religion = religion;
    }
    get atomicCode() {
        return this._atomicCode;
    }
    set newLed(newLeader) {
        this._leader = newLeader;
    }
}
class IslamicCountry extends Country {
    constructor(name, language, population, growthRate, _atomicCode, _leader, religion) {
        super(name, language, population, growthRate, _atomicCode, _leader, religion);
    }
    populationGrowthRate() {
        this.population = this.population * (1 + this.growthRate / 100);
        return this.population;
    }
}
let Afg = new IslamicCountry("Afghanistan", "Pashto", 120000, 2.3, 420, "talban", "islam"); // object 1
console.info(Afg);
let Pak = new IslamicCountry("Paxtn", "urdu", 2220000, 3, 302, "crim minstr", "islam"); // object 2
console.info(Pak);
