export default class BookAPI {
  static async getData(url) {
    const mybooks = await fetch(url);
    const bookJson = await mybooks.json();
    const books = await bookJson;
    const len = Object.keys(books).length;
    for (let k; k < len; k += 1) {
      books[k].id = Math.floor(Math.random() * 1000000);
      books[k].updated = new Date().toISOString();
    }
    localStorage.setItem('booksList', JSON.stringify(books));
    return books;
  }

  static getAllBooks() {
    const books = JSON.parse(localStorage.getItem('booksList') || '[]');
    return books;
  }

  static addBookInDom(title, author) {
    const booksSection = document.querySelector('.books');
    const div = document.createElement('div');
    div.classList.add('single_book');
    div.innerHTML = `
        <hr>
        <h2 class="title">${title}</h2>
        <p>${author}</p>
      `;
    const button = document.createElement('button');
    button.classList.add('delete_book');
    button.innerHTML = 'Remove';
    div.appendChild(button);
    booksSection.appendChild(div);
    button.addEventListener('click', (e) => {
      const title = e.target.parentElement.getElementsByTagName('h2')[0].innerHTML;
      e.target.parentElement.remove();
      BookAPI.deleteBook(title);
    });
  }

  static addBook(bookToAdd) {
    const books = BookAPI.getAllBooks();
    bookToAdd.updated = new Date().toISOString();
    books.push(bookToAdd);
    localStorage.setItem('booksList', JSON.stringify(books));
  }

  static deleteBook(title) {
    const books = BookAPI.getAllBooks();
    const newBooks = books.filter((book) => book.title !== title);
    localStorage.setItem('booksList', JSON.stringify(newBooks));
  }
}
