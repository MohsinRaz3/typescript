let returnType: (() => string) | number  // either return string or just assign num 

returnType = function (): string {return "ss"} // correct
//returnType = function (): number {return 7}  //throws error
//returnType = "6" //throws error
returnType = 6 // correct

