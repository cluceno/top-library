const library = document.querySelector(".library");
const addBook = document.querySelector(".addBook");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

const myLibrary = [
    {
        title: "The Lord of The Rings : The Fellowship of the Ring",
        author: "JRR Tolkein",
        isbn: 9780345339706,
        status: "Read",
    },
]

// Render on load

renderLibrary()

function renderLibrary() {

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const row = document.createElement("tr");
        const title = document.createElement("td");
        const author = document.createElement("td");
        const isbn = document.createElement("td");
        const status = document.createElement("td");
        const statusSpan = document.createElement("span");
        const statusButton = document.createElement("button");
        const toggle = document.createElement("td");
        const toggleButton = document.createElement("button");

        // Add text to each title 
        title.textContent = book.title;
        author.textContent = book.author;
        isbn.textContent = book.isbn;
        statusSpan.textContent = book.status;
        statusSpan.classList.add("status-text");
        status.appendChild(statusSpan);
        toggleButton.textContent = "Remove";

        // Add functionality to the status button
        statusButton.textContent = "Change";

        statusButton.addEventListener("click", () => {
            if (book.status === "Read") {
                book.status = "Unread";
            } else {
                book.status = "Read";
            }
            library.innerHTML = "";
            renderLibrary();
        })

        status.appendChild(statusButton);

        // Add functionality to the toggle button 
        toggleButton.addEventListener("click", () => {
            row.remove();
            myLibrary.splice(i, 1);
        });
        toggle.appendChild(toggleButton);
        
        row.append(title, author, isbn, status, toggle);

        library.appendChild(row);

    };
}


// Configure add button

addBook.addEventListener("click", () => {
    library.innerHTML = "";
    addBookToLibrary();
})

function Book(title, author, isbn, status) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = status; 
}

function addBookToLibrary() {
    const book = new Book(titleInput.value, authorInput.value, isbnInput.value, document.querySelector("input[name=status]:checked").value);
    myLibrary.push(book);

    renderLibrary();
}