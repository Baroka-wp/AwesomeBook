import App from './app.js';
import BookAPI from './BookAPI.js';
import Header from '../js/componnents/header.js'
import Footer from '../js/componnents/footer.js'

customElements.define('v-header', Header);
customElements.define('v-footer', Footer);

const app = document.querySelector('#app');

const nav = document.querySelector('nav');
const humberger = document.querySelector('.humberger');
const navLink = document.querySelectorAll('nav ul li');

App.displayBooklist();

humberger.addEventListener('click', (e) => {
  humberger.classList.toggle('active')
  nav.classList.toggle('active')
})

navLink.forEach(item => {
  item.addEventListener('click', () => {
    humberger.classList.remove('active')
    nav.classList.remove('active')
  })
})

document.addEventListener('click',(e) => {
  if (e.target.matches('.add_book')) {
      App.displayNewBookForm()
  } else if (e.target.matches('.book_list') ||
            e.target.matches('.fa-xmark')
          ){
      App.displayBooklist();
  } else if(e.target.matches('.contact')) {
      App.displayContact();
    }
  })
