// Type defined for Author
type Author =  {
        firstName: string;
        lastName: string;
    }
// Author type added inside in book type
// pages?: let us use/unused datatype variable
type book = {
    author: Author
    name: string
    pages?: number
}
// types used in variable
let favBook: book = {
    author: {
        firstName: "Mohsin",
        lastName: "Raz"
    },
    name: "Rising coder",
    pages: 44
}
console.log(favBook.author.firstName + favBook.author.lastName + favBook.name);

let lefav: book = {
    author: {
        firstName: "ajjs",
        lastName: "Radfddaz"
    },
    name: "Rising codssder",
    pages: 44

}