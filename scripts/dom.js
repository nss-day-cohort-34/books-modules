const booksContainer = document.querySelector("#books")


const renderToDom = (bookHTML) => {
    booksContainer.innerHTML += bookHTML
}

export default renderToDom
