let myName: string | null;

myName = null;
console.log(`My Name is: ${myName}`);

myName = "mrk"
console.log(`My name is ${myName}`);

let myAge: string | number;
myAge = 26
console.log(`My age is ${myAge}`);

myAge = "khan"
//console.log(myAge.toString()); //convert to string even tho its already

//console.log(myAge.toLowerCase()); //lowerscase

if(myAge === "khan"){
   myAge = myAge.toUpperCase()
    console.log(myAge);
}

if(typeof myAge === "string"){
   myAge = myAge.toLowerCase()
    console.log(myAge);
}

let newName = Math.random() > 0.5 ? "mrk" : null;
//console.log(newName);

if(newName){
   newName =  newName.toUpperCase()
    console.log(newName);
    
}

//TYPE ALIAS

type rawType = boolean |number |string |null |undefined;

let data: rawType;

type Id = string | number;
type idMaybe = Id | undefined | null;


let fullName: idMaybe = "Mohsin" 
fullName = 55
fullName = undefined;
fullName = null