abstract class Base{
   abstract  getName():string;
   abstract myName(): string;
}

//let myBase = new Base()  // CAn't create Object outta abstract class and method
class Derived extends Base{  
    getName(): string {
        return "first method"   // implementation can only be in derived/child class
    }
    myName(): string {
        return "second method"    
    }
}

//let baseObj = new Base()  We cant create object of abstract class

let absObj = new Derived()
console.log(absObj.getName());
