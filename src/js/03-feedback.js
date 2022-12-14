import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formObject = {};

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

// updateInputForm();
initForm();

function onInputForm(evt) {
  formObject[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
}

function initForm() {
  let persistedFilters = localStorage.getItem(STORAGE_KEY)
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
   Object.entries(persistedFilters).forEach (([name, value]) => {
    formObject[name] = value;
   form.elements[name].value = value;
   });
  }
}

// function updateInputForm() {
//   // const saveForm = localStorage.getItem(STORAGE_KEY);
//   const saveFormPars = JSON.parse(saveForm);
 
//   if(saveForm) {
//    form.elements.email.value = saveFormPars.email || '';
//    form.elements.message.value = saveFormPars.message || '';
//   };
//  };
 


function onSubmitForm(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;
  const formData = { email: email.value, message: message.value };

  if (email.value === '' || message.value === '') {
    return alert('Пожалуйста, заполните пустые строки!');
  }
  formObject = {};
  console.log("Отправляем форму: ", formData);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}



