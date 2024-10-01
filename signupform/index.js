const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const errorArea = document.querySelector('#errorArea');

password.addEventListener('input', passwordMatch);
passwordConfirm.addEventListener('input', passwordMatch);

// Creating error message
let error = document.createElement('p');
error.setAttribute('id', 'error');

function passwordMatch() {
    if (password.value === "" || passwordConfirm.value === "") {
        errorMessage.innerHTML = "";
    } else if (passwordConfirm.value != password.value) {
        // Appending error message
        errorArea.appendChild(error);

        const errorMessage = document.querySelector("#error");

        // Changing style
        errorMessage.innerHTML = "* Passwords do not match";
        errorMessage.style.color = "var(--red)";
        password.style.outline = "var(--red) 1px solid";
        passwordConfirm.style.outline = "var(--red) 1px solid";
    }
    else if (passwordConfirm.value === password.value) {
        // Appending error message
        errorArea.appendChild(error);

        const errorMessage = document.querySelector("#error");

        // Changing styles
        errorMessage.innerHTML = "* Passwords are a match";
        errorMessage.style.color = "var(--valid)";
        password.style.outline = "var(--valid) 1px solid";
        passwordConfirm.style.outline = "var(--valid) 1px solid";
    }
}