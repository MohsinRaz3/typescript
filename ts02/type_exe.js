"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let book = Math.random() > 0.5 ? { name: "atomic habits", pages: 444 } : { name: "Mastering Blokchain", words: "buzz", author: "Imran Bashir" };
// if(book.pages === 444){
//     console.log(`${book.pages}`);
// }else {
//    console.log(`${book.name}`);
// }
if ("pages" in book) {
    console.log(`My current book is ${book.name} and it has ${book.pages} pages.`);
}
else if ("words" in book) {
    console.log(`I'm reading ${book.name} book its a ${book.words} word and its authour is ${book.author}`);
}
