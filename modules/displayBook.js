const bookContainer = document.querySelector('.book-container');


const displayBook = (book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.innerHTML = `<p>"${book.name}" by ${book.author}</p>
    `;
    const deleteBook = document.createElement('button');
    deleteBook.classList.add('delete');
    deleteBook.textContent = 'Remove';
    deleteBook.addEventListener('click', () => {
      this.deleteBook(book.name);
    });
    newBook.appendChild(deleteBook);
    bookContainer.appendChild(newBook);
  };

export default displayBook;

