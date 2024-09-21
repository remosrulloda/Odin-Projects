function fibs(num) {
    let array = [];
    if (num <= 0) return [];
    if (num === 1) return [1];

    array[0] = 0;

    if (num > 1) array[1] = 1;

    for (let i = 2; i < num; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }

    return array;
}

console.log('fibs(4) : ' + fibs(4));

// recursive version
function fibsRec(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let array = fibsRec(num - 1);

    array.push(array[array.length - 1] + array[array.length - 2]);

    return array;
}

console.log('fibsRec(4): ' + fibsRec(4));