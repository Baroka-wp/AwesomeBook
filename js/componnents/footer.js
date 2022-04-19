export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.footer = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>&copy; 2022 Baroka | MIT(creatice Comon) </p>
    </footer>
    `;
  }
}
