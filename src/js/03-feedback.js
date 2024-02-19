import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
  console.log(message);
}

populateTextarea();
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  console.log(savedMessage);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
