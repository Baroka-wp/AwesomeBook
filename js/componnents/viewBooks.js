export default class ViewBook extends HTMLElement {
  constructor() {
    super();

    this.titl = "";
    this.author = "";
  }

  connectedCallback() {
    //this.titl = this.getAttribute("titl");
    //this.author = this.getAttribute("author");
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="single_book">
        <h1>${this.titl}</h1>
        <p>${this.author}</p>
        <button class="delete_book" type="button" name="button">Remove</button>
      </div>
      `;
  }
}
