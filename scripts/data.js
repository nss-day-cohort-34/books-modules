const BooksDatabase = [
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Nelle Harper Lee",
        "available": false
    },
    {
        "id": 2,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "available": false
    },
    {
        "id": 3,
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "available": true
    },
    {
        "id": 4,
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "available": false
    },
    {
        "id": 5,
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "available": false
    },
    {
        "id": 6,
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "available": false
    },
    {
        "id": 7,
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K. Rowling",
        "available": true
    },
    {
        "id": 8,
        "title": "Catching Fire",
        "author": "Suzanne Collins",
        "available": true
    }
]

const getBooks = () => {
    return BooksDatabase
}

const checkinBook = (title) => {
    const foundBook = BooksDatabase.find(
        (currentBook) => {
            return currentBook.title === title
        }
    )

    foundBook.available = true

    return `Thank you for returning ${title}`
}

const checkoutBook = (title) => {
    // Find by title
    const foundBook = BooksDatabase.find(
        (currentBook) => {
            return currentBook.title === title
        }
    )

    // Is book available?
    if (foundBook.available) {
        // Change availability to false
        foundBook.available = false

        // If available, return book title
        return foundBook.title
    }

    return "Sorry, book not available"
}

export default {
    getBooks, checkoutBook, checkinBook
}
