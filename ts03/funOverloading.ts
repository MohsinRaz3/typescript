
function addValues(val1:number, val2: number): number;
function addValues(val1: string, val2: string): string;

function addValues(val1: any, val2: any): any {
   return val1 + val2
}
console.log(addValues(1,3))
console.log(addValues("hello", " frens"));


//console.log(new Date());

function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number):Date;

 function createDate(dayOrtimestamp: number, month?: number, year?:number){

    return month === undefined || year === undefined
    ? new Date(dayOrtimestamp)
    : new Date(year, month, dayOrtimestamp)
 }

 //console.log(createDate(33));