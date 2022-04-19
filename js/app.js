import BookAPI from './BookAPI.js';

const app = document.querySelector('#app');

export default class App {
  static displayBooklist() {
    const books = BookAPI.getAllBooks();
    const div = document.createElement('div');
    div.classList.add('books');
    div.innerHTML = '<h2>All Awesome books</h2>';
    app.innerHTML = '';
    app.appendChild(div);
    Object.keys(books).forEach((k) => {
      BookAPI.addBookInDom(books[k].title, books[k].author);
    });
  }

  static displayNewBookForm() {
    app.innerHTML = '';
    app.innerHTML = `
        <form class="form_add">
            <div class=form_head> <h2>Add new book</h2> <i class="fa-solid fa-xmark"></i></div>
            <input id="bookTitle" type="text"  placeholder="Title">
            <input id="bookAuthor" type="text" placeholder="Author">
            <small class="message"></small>
            <input type="submit" name="add" value="add">
        </form>
    `;
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const bookTitle = document.querySelector('#bookTitle');
      const bookAuthor = document.querySelector('#bookAuthor');
      const message = document.querySelector('.message');

      if (bookTitle.value === '' || bookAuthor.value === '') {
        message.textContent = '';
        message.style.color = 'red';
        message.textContent = '❌ All field should be fill !';
      } else {
        // BookAPI.addBookInDom(bookTitle.value, bookAuthor.value);
        BookAPI.addBook({ title: bookTitle.value, author: bookAuthor.value });
        bookTitle.value = '';
        bookAuthor.value = '';
        message.textContent = '';
        message.style.color = 'green';
        message.textContent = '✅ Your book has been added succesfully !';
      }
    });
  }

  static displayContact() {
    app.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('contact_info');
    div.innerHTML = `
        <div class=form_head> <h2>Contact informations</h2> <i class="fa-solid fa-xmark"></i></div>
        <p>Do you have any question or just want to say "Hello" ? <br> you can reach out to us</p>
        <ul>
          <li><strong>Our email</strong> : birotori@gmail.com</li>
          <li><strong>Our phone nuber</strong>: 00229 67 15 39 74</li>
          <li><strong>Our address</strong> : Calavi Bakita, à 200 mètres après le Collège Bakita. Immeuble N'DAH K. ALDO</li>
        </ul>
    `;
    app.appendChild(div);
  }
}
