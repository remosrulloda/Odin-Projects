const defaultSize = 16;

function createBoard(size) {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.cssText = 'background-color: #F5F5F5; border: #EFEFEF 1px solid;';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        container.insertAdjacentElement("beforeend", square);
    }
};

createBoard(defaultSize);

function changeSize() {
    let newSize = prompt('Enter the new board size');

    if (newSize >= 2 && newSize <= 100) {
        createBoard(newSize);
    } else {
        console.log('Too many squares!');
    }
}

function black() {
    const container = document.querySelector('.container');
    const squares = container.querySelectorAll('div');
    squares.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    }));
}

function white() {
    const container = document.querySelector('.container');
    const squares = container.querySelectorAll('div');
    squares.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#FFFFFF';
    }));
}

function erase() {
    const container = document.querySelector('.container');
    const squares = container.querySelectorAll('div');
    squares.forEach((div) => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#F5F5F5';
    }));
}

function clearBoard() {
    const container = document.querySelector('.container');
    const squares = container.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = '#F5F5F5');
}
