
function myCallback(text: string){
    console.log("inside myCallback" + text);
}

function callingFunction(initialText: string, callback: (text: string)=> void){
    callback(initialText)
   // return initialText
}

callingFunction(" callingText", myCallback)