const bookForm = document.querySelector('#bookForm');
const bookSection = document.querySelector('#bookList');
const contactSection = document.querySelector('#contactDetails');
const listBtn = document.getElementById('listBtn');
const formBtn = document.querySelector('#addBtn');
const contactBtn = document.getElementById('contactBtn');

const listArr = [bookForm, contactSection];
const formArr = [bookSection, contactSection];
const contactArr = [bookForm, bookSection];

class listView {
  static changeContent = (key) => {
    if (key === 'List') {
      listBtn.style.color = '#e90074';
      formBtn.style.color = '#555';
      contactBtn.style.color = '#555';
      bookSection.classList.remove('hide');
      listArr.forEach((item) => {
        item.classList.add('hide');
      });
    } else if (key === 'Add new') {
      listBtn.style.color = '#555';
      formBtn.style.color = '#e90074';
      contactBtn.style.color = '#555';
      bookForm.classList.remove('hide');
      formArr.forEach((item) => {
        item.classList.add('hide');
      });
    } else if (key === 'Contact') {
      listBtn.style.color = '#555';
      formBtn.style.color = '#555';
      contactBtn.style.color = '#e90074';
      contactSection.classList.remove('hide');
      contactArr.forEach((item) => {
        item.classList.add('hide');
      });
    }
  };
}

const initial = () => {
  bookSection.classList.remove('hide');
  listArr.forEach((item) => {
    item.classList.add('hide');
  });
};

window.onload = initial();

export default listView;