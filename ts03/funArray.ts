// 1st Example
let arrFun: ()=> string[];    // function that returns array of strings
arrFun: ()=> ["Mohsin", "Raz", "Khan"]

// 2nd Example
let funArray: (()=>string[]) []  // a function that returns functions in an array
funArray: () => []
console.log(()=>"Mohsin Raz", ()=>"How are you deer?");

// 3rd Example
function nameOf(greeting: string, ...nicknaam: string[]){
    for(const naam of nicknaam){
        //console.log(`${greeting} ${naam}`);    
    }
}
nameOf("Salam", "Mohsin", "Ahsan", "Faisal", "Haider")  // rest parameter

