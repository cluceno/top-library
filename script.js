const library = document.querySelector(".library");
const addBook = document.querySelector(".add");

const myLibrary = [
    {
        title: "The Lord of The Rings : The Fellowship of the Ring",
        author: "JRR Tolkein",
        isbn: 9780345339706,
        status: "Read",
    },
]

// Render on load

for (let book of myLibrary) {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const isbn = document.createElement("td");
    const status = document.createElement("td");
    const toggle = document.createElement("td");
    const toggleButton = document.createElement("button");

    // Add text to each title 
    title.textContent = book.title;
    author.textContent = book.author;
    isbn.textContent = book.isbn;
    status.textContent = book.status;
    toggleButton.textContent = "Remove";
    
    // Add functionality to the button 
    toggleButton.addEventListener("click", () => {
        row.remove();
    });
    toggle.appendChild(toggleButton);
    
    row.append(title, author, isbn, status, toggle);

    library.appendChild(row);

}

// Configure add button

addBook.addEventListener("click", () => {
    
})

function Book(title, author, isbn, status) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status - status; 
}

function addBookToLibrary() {

}