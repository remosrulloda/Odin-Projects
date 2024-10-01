function analyzeArray(arr) {
    let len = arr.length;


    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    let avg = sum / len;

    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);

    return {
        average: avg,
        min: minVal,
        max: maxVal,
        length: len
    }
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
module.exports = analyzeArray;