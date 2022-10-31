import displayBook from './modules/displayBook.js';
import { DateTime } from './modules/luxon.js';
import listView from './modules/ListView.js';

const bookName = document.querySelector('.bookName');
const bookAuthor = document.querySelector('.bookAuthor');
const form = document.querySelector('.addBook');
const bookList = JSON.parse(localStorage.getItem('bookList')) || [];
const message = document.querySelector('.message');
const time = document.querySelector('.clock');

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  addBook = () => {
    bookList.push(this);
    localStorage.setItem('bookList', JSON.stringify(bookList));
  };
}

function redirect() {
  listView.changeContent('List');
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

setInterval(() => {
  const now = DateTime.now();
  time.textContent = now.toLocaleString(DateTime.DATETIME_MED);
}, 1000);

document.querySelectorAll('.change').forEach((item) => {
  item.addEventListener('click', () => {
    listView.changeContent(item.textContent);
  });
});