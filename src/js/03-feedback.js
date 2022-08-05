import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-msg';
const STORAGE_KEY2 = 'e-mail';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector('.feedback-form  input')
};


refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onEmailInput, 500));


populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */



function onFormSubmit(evt) {
    evt.preventDefault();
  
    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
  
  }

  // сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

  const formData = {};

refs.form.addEventListener('input', e => {

  formData[e.target.name] = e.target.value;
 
});

/*
  * - Получаем значение поля
  * - Сохраняем его в хранилище
  * - Можно добавить throttle
  */
 
function onTextareaInput(evt) {
   const message = evt.target.value;
 
   localStorage.setItem(STORAGE_KEY, message);
 }

 function onEmailInput(evt) {
    const message = evt.target.value;
  
    localStorage.setItem(STORAGE_KEY2, message);
  }


 /*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedEmail = localStorage.getItem(STORAGE_KEY2);
  
    if (savedMessage && savedEmail) {
      refs.textarea.value = savedMessage;
      refs.input.value = savedEmail;
    }
  }






