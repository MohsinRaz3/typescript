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
    populationGrowthRate() { return 3; } // abstract method
    get atomicCode() {
        return this._atomicCode;
    }
    set newLed(newLeader) {
        this._leader = newLeader;
    }
    greetings() {
        return "namsate";
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
    greetings() {
        return "Assalamoalikum";
    }
}
let Ind = new Country("bharat", "Hindi", 1520000, 4.3, 420, "modi", "hindiusm"); // object 1
console.info(Ind.greetings());
let Pak = new IslamicCountry("Paxtn", "urdu", 2220000, 3, 302, "crim minstr", "islam"); // object 2
console.info(Pak.greetings());
