// Type defined for Author
type Author =  {
        firstName: string;
        lastName: string;
    }

// Author type added inside in book type
type book = {
    author: Author,
    name: string
}

// types used in variable
let favBook: book = {
    author: {
        firstName: "Mohsin",
        lastName: "Raz"
    },
    name: "Rising coder"
}

console.log(favBook.author.firstName + favBook.author.lastName + favBook.name);
