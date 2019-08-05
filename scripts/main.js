/*
    1. List books
    2. Check out book
    3. Check in book
*/
import bookMethods from "./data.js"
import bookHTML from "./factory.js"
import renderToDom from "./dom.js"

const allBooks = bookMethods.getBooks()

allBooks.forEach(currentBook => {
    const theHTMLVersion = bookHTML(currentBook)
    renderToDom(theHTMLVersion)
})

const firstResponse = bookMethods.checkoutBook("Harry Potter and the Chamber of Secrets")
const secondResponse = bookMethods.checkinBook("Harry Potter and the Chamber of Secrets")
const thirdResponse = bookMethods.checkoutBook("Harry Potter and the Chamber of Secrets")

console.log(firstResponse)
console.log(secondResponse)
console.log(thirdResponse)
