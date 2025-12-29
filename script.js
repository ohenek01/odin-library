const myForm = document.querySelector("form");
const container = document.querySelector(".card-container");

let myLibrary = [];

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(myForm);
    const title = formData.get("book-title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const read = myForm.querySelector('[name="status"]').checked;

    addBookToLibrary(title, author, pages, read);
    renderLibrary();
    myForm.reset();
})



container.addEventListener("click", (event) => {
    if(event.target.classList.contains("button")){
        const id = event.target.dataset.id;
        removeBook(id);
    }
})

container.addEventListener("change", (event) => {
    if(event.target.classList.contains("checkbox")){
        const id = event.target.dataset.id;
        const book = myLibrary.find((book) => book.id === id);
        if(book){
            book.read = event.target.checked;
            renderLibrary();
        }
    }
})

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !read;
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function removeBook(id){
    myLibrary = myLibrary.filter((book) => book.id !== id);
    renderLibrary();
}

const renderLibrary = () => {
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = book.id;

        card.innerHTML = 
                `<h2>${book.title}</h2>
                 <h3>Written by: ${book.author}</h3>
                 <p>Pages: ${book.pages}</p>
                 <label>Read Status:
                    <input type="checkbox" class="checkbox" data-id="${book.id}" ${book.read ? "checked" : ""}>
                 </label>
                 <button class="button" data-id="${book.id}">Delete Book</button>
                `;
            
            container.appendChild(card);
    });
    console.log(myLibrary)
}