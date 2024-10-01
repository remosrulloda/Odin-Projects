const numbers = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');
let currentScreen = document.querySelector('.current');
let previousScreen = document.querySelector('.previous');
let equals = document.querySelector('.equals');
let clearAll = document.querySelector('.allclear');
let clear = document.querySelector('.clear');
let solve = document.querySelector('.equals');
let decimal = document.querySelector('.decimal');

let previousValue = '';
let currentValue = '';
let operator = '';
let equation = '';

// Adding event listeners to the buttons
numbers.forEach(number => number.addEventListener('click', function (e) {
    updateNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}));

operators.forEach((op) => op.addEventListener('click', function (e) {
    if (currentValue != '') {
        updateOperator(e.target.value);
        previousScreen.textContent = previousValue + ' ' + operator;
        currentScreen.textContent = currentValue;
    }
}));

clearAll.addEventListener('click', function () {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
});

equals.addEventListener('click', function () {
    if (currentValue != '' && previousValue != '') {
        calculate();
        previousScreen.textContent = equation;
        if (previousValue.length <= 5) {
            currentScreen.textContent = previousValue;
        } else {
            currentScreen.textContent = previousValue.slice(0, 5) + '...';
        }
    }
});

clear.addEventListener('click', function () {
    if (currentValue.length > 0) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
    } else if (currentValue.length === 0) {
        currentValue = previousValue;
        previousValue = '';
        previousScreen.textContent = previousValue;
    }
    currentScreen.textContent = currentValue;

    console.log(`current value ${currentValue}`);
});

decimal.addEventListener('click', addDecimal);

function addDecimal() {
    if (currentValue === '') {
        currentValue += '0.';
    }

    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

function updateNumber(num) {
    if (currentValue.length <= 8) {
        currentValue += num;
    }
}

function updateOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    equation = `${previousValue} ${operator} ${currentValue}`;

    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    }
    else if (operator === '-') {
        previousValue -= currentValue;
    }
    else if (operator === '*') {
        previousValue *= currentValue;
    }
    else if (operator === '/') {
        previousValue /= currentValue;
    }
    else {
        previousValue %= currentValue;
    }

    previousValue = roundNumber(previousValue).toString();
    currentValue = currentValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

