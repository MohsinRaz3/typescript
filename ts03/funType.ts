//let funType: (name: string, nickName?: string[]) => string;   //we declare variable that stores a function that will return string value


















const naam = ["mrk", "raz", "kahn", "afridi"]

function allNickNames(callback: (index: number) => string) {
 
    for (let i = 0; i < naam.length; i++) {
    console.log(callback(i));
    }
}

function getNameAt(index:number){
    return `${naam[index]}`
}
allNickNames(getNameAt)


