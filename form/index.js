let form = document.getElementById('address-input');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');

const emailError = document.querySelector('#email + span.error');
const countryError = document.querySelector('#country + span.error');
const zipcodeError = document.querySelector('#zipcode + span.error');
const passwordError = document.querySelector('#password + span.error');

email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
zipcode.addEventListener('input', validateZipcode);
password.addEventListener('input', validatePassword);

form.addEventListener('submit', (event) => {
    let valid = validateEmail() && validateCountry() && validateZipcode() && validatePassword();
    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail() {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
        return true;
    } else {
        showEmailError();
        return false;
    }
}

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = 'error active';
}

function validateCountry() {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
        return true;
    } else {
        countryError.textContent = 'Country is required.';
        countryError.className = 'error active';
        return false;
    }
}

function validateZipcode() {
    if (zipcode.validity.valid) {
        zipcodeError.textContent = '';
        zipcodeError.className = 'error';
        return true;
    } else {
        zipcodeError.textContent = 'Zip code must be exactly 5 digits.';
        zipcodeError.className = 'error active';
        return false;
    }
}

function validatePassword() {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
        return true;
    } else {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordError.className = 'error active';
        return false;
    }
}
