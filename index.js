import displayBook from './modules/displayBook.js';

const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

const bookForm = document.querySelector('#bookForm');
const bookSection = document.querySelector('#bookList');
const contactSection = document.querySelector('#contactDetails');

const listBtn = document.getElementById('listBtn');
const formBtn = document.querySelector('#addBtn');
const contactBtn = document.getElementById('contactBtn');

const listArr = [bookForm, contactSection];
const formArr = [bookSection, contactSection];
const contactArr = [bookForm, bookSection];

const message = document.querySelector('.message');

class Book {
    constructor(name, author) {
      this.name = name;
      this.author = author;
    }
    addBook() {
        bookList.push(this);
        localStorage.setItem('bookList', JSON.stringify(bookList));
    } 
     
  
    deleteBook= (name) => {
      const removeItem = bookList.filter((item) => item.name !== name);
      localStorage.setItem('bookList', JSON.stringify(removeItem));
      window.location.reload();
    }
  }
  
  function redirect() {
    bookSection.classList.remove('hide');
    listArr.forEach((item) => {
      item.classList.add('hide');
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    message.textContent = '';
    const book = new Book(bookName.value, bookAuthor.value);
    book.addBook();
    displayBook(book);
    form.reset();
    redirect();
  });
  
  bookList.forEach((book) => {
    const bookObj = new Book(book.name, book.author);
    displayBook(bookObj);
  });
  
  if (!bookList.length) {
    message.innerHTML = 'click Add new link to add a new book';
  }
  
  listBtn.addEventListener('click', () => {
    listBtn.style.color = '#e90074';
    formBtn.style.color = '#555';
    contactBtn.style.color = '#555';
    bookSection.classList.remove('hide');
    listArr.forEach((item) => {
      item.classList.add('hide');
    });
  });
  
  formBtn.addEventListener('click', () => {
    listBtn.style.color = '#555';
    formBtn.style.color = '#e90074';
    contactBtn.style.color = '#555';
    bookForm.classList.remove('hide');
    formArr.forEach((item) => {
      item.classList.add('hide');
    });
  });
  
  contactBtn.addEventListener('click', () => {
    listBtn.style.color = '#555';
    formBtn.style.color = '#555';
    contactBtn.style.color = '#e90074';
    contactSection.classList.remove('hide');
    contactArr.forEach((item) => {
      item.classList.add('hide');
    });
  });
  
  const initial = () => {
    bookSection.classList.remove('hide');
    listArr.forEach((item) => {
      item.classList.add('hide');
    });
  };
  
  window.onload = initial();