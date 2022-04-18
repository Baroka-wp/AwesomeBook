import BookAPI from "../js/BookAPI.js";
const form = document.querySelector('form')

const books = BookAPI.getAllBooks()
for(let k in books) {
  BookAPI.addBookInDom(books[k].title,books[k].author )
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const bookTitle = document.querySelector('#bookTitle');
    const bookAuthor = document.querySelector('#bookAuthor');
    BookAPI.addBookInDom(bookTitle.value,bookAuthor.value)
    BookAPI.addBook({title: bookTitle.value,author: bookAuthor.value});
    bookTitle.value = "";
    bookAuthor.value = ""
})
