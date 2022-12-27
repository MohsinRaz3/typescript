class Vehical {
    color = "purple"
    start(state: boolean){
        if(state === true){
            console.log("Start engine");
             
        }else {
            console.log("Shutting down engine");
            
        }
    }
}

let myCar = new Vehical()
myCar.start(true)