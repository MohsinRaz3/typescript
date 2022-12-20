interface teacher{
    sub?: string,
    batch_t?: number
}

interface student{
    batch_s?: number,
    class?: string
}

type uniType = teacher & student;

let University: uniType = {

    class: "CS",
    batch_t: 4,
    sub: "Computer"

}

if ("batch_t" in University){
    console.log(`${University.batch_t}`);
}
// 

// console.log(University.sub);
// console.log(University.batch_t);
// console.log(University.class);
