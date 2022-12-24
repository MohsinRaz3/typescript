let myArray: string[] //This is an array type

let myTuple: [string, number] = ["mrk", 3];   //tuples for number & Strings
let anyTuple: (string | number)[] = [33,"sa",33]  //tuples for number & strings both

// 2rd Example
let newTuple: [number,string,boolean] = Math.random() > 0.6 ? [1, "Mohsin", true] : [2,"Ahsan", false];
console.log(newTuple);
