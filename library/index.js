const books = document.querySelector('.books');

const addBtn = document.querySelector('#addBookBtn');
addBtn.addEventListener('click', addBookToLibrary);

// Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary = [];
let newBook;

// Default books that show up
const lightningThief = new Book('The Lightning Thief', 'Rick Riordan', 377, true);
const loveTheo = new Book('Love Theoretically', 'Ali Hazelwood', 389, false);
const hooky = new Book('Hooky', 'Miriam Bonastre', 389, true);
const spellslinger = new Book('Spellslinger', 'Sebastien de Castell', 416, true)

myLibrary.push(lightningThief);
myLibrary.push(loveTheo);
myLibrary.push(hooky);
myLibrary.push(spellslinger);

// Creates a new card
function createCard(book) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h2 class='title'>${book.title}</h2>
    <h3 class='author'>${book.author}</h3>
    <h4 class='pages'>${book.pages} pages</h4>
    `;

    let readDiv = document.createElement('div');
    let readLabel = document.createElement('label');
    let readToggle = document.createElement('input');
    let removeDiv = document.createElement('div');
    let removeBtn = document.createElement('button');

    readDiv.classList.add('readDiv');

    readLabel.innerHTML = 'Read';
    readToggle.type = 'checkbox';

    if (book.read) { readToggle.checked = true; }

    readDiv.appendChild(readLabel);
    readDiv.appendChild(readToggle);

    card.appendChild(readDiv);

    removeDiv.classList.add('removeDiv');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = 'Remove';

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        displayAllBooks();
    });

    removeDiv.appendChild(removeBtn);
    card.appendChild(removeDiv);

    books.appendChild(card);
}

// Displays all books on the bookshelf
function displayAllBooks() {
    const display = document.querySelector('.books');
    const books = document.querySelectorAll('.card');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i]);
    }
}

// Display all books
displayAllBooks();

// Adds book to library
function addBookToLibrary(event) {
    event.preventDefault();


    const titleInput = document.getElementById('titleInput').value;
    const authorInput = document.getElementById('authorInput').value;
    const pagesInput = document.getElementById('pagesInput').value;
    const toggleRead = document.getElementById('toggleRead').checked;

    // Ensure the title field is not empty
    if (titleInput.trim() === '') {
        alert('Please fill out the title.');
        return;
    }

    newBook = new Book(titleInput, authorInput, pagesInput, toggleRead);
    myLibrary.push(newBook);
    displayAllBooks();
    form.reset();
}
