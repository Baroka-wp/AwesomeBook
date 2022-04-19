export default class Header extends HTMLElement {
  constructor() {
    super();
    this.header = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <h1><a class="logo" href="#">Awesome books</a> <i class="fa-solid fa-book-atlas"></i></h1>
        <div class="humberger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <nav>
          <ul>
            <li><a class="book_list" href="#">Book list</a></li>
            <li><a class="add_book" href="#">Add new book</a></li>
            <li><a class="contact" href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
