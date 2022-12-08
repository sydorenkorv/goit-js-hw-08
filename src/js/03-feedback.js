import _throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state'

let formData = {};

populateTextArea();

form.addEventListener('input', _throttle(onTextAreaInput, 500));
form.addEventListener('submit', onFormSubmit);

function onTextAreaInput(e){

const inputs = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    inputs[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
}




function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData)

}


function populateTextArea() {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!formData) {
        return
    }
    form.email.value = formData.email || ''
    form.message.value = formData.message || ''



 }