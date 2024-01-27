const input = document.querySelector('.login-input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

input.addEventListener('input', validateInput);

form.addEventListener('submit', handleSubmit);

function validateInput() {
    if(input.value.length > 2){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}