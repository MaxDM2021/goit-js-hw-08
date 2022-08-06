import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formObject = {};

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

updateInputForm();

function onInputForm(evt) {
  evt.preventDefault();
  formObject[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
}

function onSubmitForm(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;
  const formData = { email: email.value, message: message.value };

  if (email.value === '' || message.value === '') {
    return alert('Пожалуйста, заполните пустые строки!');
  }
  console.log("Отправляем форму: ", formData);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}

function updateInputForm() {
 const saveForm = localStorage.getItem(STORAGE_KEY);
 const saveFormPars = JSON.parse(saveForm);

 if(saveForm) {
  form.elements.email.value = saveFormPars.email || '';
  form.elements.message.value = saveFormPars.message || '';
 };
};


