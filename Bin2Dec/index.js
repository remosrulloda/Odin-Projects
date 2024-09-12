let convertBtn = document.getElementById('input-btn');
let decimalValue = document.getElementById('result-value');

convertBtn.addEventListener('click', function () {
    let binaryValue = document.getElementById('input-area').value;
    decimalValue.textContent = binaryValue;
    binaryCheck(binaryValue);
});

function binaryCheck(binaryNum) {
    const isBinary = /^[01]+$/;

    if (isBinary.test(binaryNum)) {
        console.log('Is binary');
        // Convert function
        let separatedNum = separateNum(binaryNum);
        convertToBinary(separatedNum);
    }
    else {
        console.log('Not binary');
        // Display error message
        decimalValue.textContent = 'Not a binary number!';
    }
}

function separateNum(binaryNum) {
    // Separate each number and multiply by 2^0,1,2,3...
    let numberArr = Array.from(binaryNum.toString()).map(Number);
    return numberArr.reverse();
}

function convertToBinary(arr) {
    let finalValue = 0;

    for (let i = 0; i < arr.length; i++) {
        finalValue += (arr[i] * Math.pow(2, i));
    }

    decimalValue.textContent = finalValue;
}