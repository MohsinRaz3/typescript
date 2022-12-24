// 1st Example
let arrType: (string| number)[];   // an array it can either have number or string values
arrType = [1,2,3,"mrk"]

// 2nd Example
let NoOfStudentsBatch1: number[] = [1400,300,400,400];

let AllBatches: number [][]= 
[
    NoOfStudentsBatch1,             // first batch
    [1200,200,300,300],            // second batch
    [1000,100,200,200]            // third batch
]
console.log(AllBatches);

// 3rd Example
let nickNames:string[] = ["Mohsin", "coderr", "mrk"]
let numberz: number[] = [1,2]

let favName = [...nickNames,...numberz]  // spread parameter
console.log(favName);  //[ 'Mohsin', 'coderr', 'mrk', 1, 2 ]

// favName = [nickNames,numberz]   OUTPUT:  [ [ 'Mohsin', 'coderr', 'mrk' ], [ 1, 2 ] ]


