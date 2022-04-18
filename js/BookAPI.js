export default class BookAPI {
  static async getData (url) {
      const mybooks = await fetch(url);
      const bookJson = await mybooks.json();
      const books = await bookJson;
      for(let k in books){
        books[k].id = Math.floor(Math.random()*1000000);
        books[k].updated = new Date().toISOString();
      };
      localStorage.setItem("booksList", JSON.stringify(books));
      return books
  }
  static getAllBooks() {
    const books = JSON.parse(localStorage.getItem("booksList"));
    // sort by updated date
    return books
    //return books.sort((a,b) => {
      //return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    //});
  }

  static addBook(bookToAdd) {
    let books = BookAPI.getAllBooks();
    //const existingBook = books.find(book => book.title.toLowerCase == bookToAdd.title.toLowerCase);
    //console.log(existingBook)
    //bookToAdd.id = Math.floor(Math.random()*1000000);
    bookToAdd.updated = new Date().toISOString();
    books.push(bookToAdd);
    localStorage.setItem("booksList", JSON.stringify(books));
  }

  static deleteBook(title) {
    const books = BookAPI.getAllBooks();
    const newBooks = books.filter(book => book.title != title);

    localStorage.setItem("booksList", JSON.stringify(newBooks));
  }

}
