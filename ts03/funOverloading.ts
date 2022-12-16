//console.log(new Date());

function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number):Date;

 function createDate(dayOrtimestamp: number, month?: number, year?:number){

    return month === undefined || year === undefined
    ? new Date(dayOrtimestamp)
    : new Date(year, month, dayOrtimestamp)
 }

 console.log(createDate(33));