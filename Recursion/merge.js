function mergeSort(arr) {
    // Base case: arrays with less than 2 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index
    let mid = Math.floor(arr.length / 2);

    // Split the array into two halves
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort both halves
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    // Merge the two sorted halves and return the result
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one to the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements (if any) from both arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arr = [4, 2, 7, 1, 3, 6, 5];
let sortedArr = mergeSort(arr);
console.log(sortedArr);  // Output: [1, 2, 3, 4, 5, 6, 7]