const bookHTML = (bookObject) => {
    return `
        <section>
            <h1>${bookObject.title}</h1>
            <h5>${bookObject.author}</h5>
        </section>
    `
}

export default bookHTML
