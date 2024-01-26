const input = document.querySelector('.login-input');
const button = document.querySelector('.login__button');

input.addEventListener('input', validateInput);

function validateInput() {
    if(input.value.length > 2){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}