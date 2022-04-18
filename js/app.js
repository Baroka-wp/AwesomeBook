import BookAPI from './BookAPI.js';

const form = document.querySelector('form');

const books = BookAPI.getAllBooks();

Object.keys(books).forEach(k => {
  BookAPI.addBookInDom(books[k].title, books[k].author);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#bookTitle');
  const bookAuthor = document.querySelector('#bookAuthor');
  const messageError = document.querySelector('.messageError')

  if(bookTitle.value=="" || bookAuthor.value=="") {
    messageError.textContent = "✋ All field should be fill !"
  }else {
    BookAPI.addBookInDom(bookTitle.value, bookAuthor.value);
    BookAPI.addBook({ title: bookTitle.value, author: bookAuthor.value});
    bookTitle.value = '';
    bookAuthor.value = '';
    messageError.textContent = ""
  }
});
