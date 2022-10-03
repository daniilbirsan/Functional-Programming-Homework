// Func which get as arguments an array of numbers ex: [2, 1, -4, 5, 6, 7, 2, 3, 4] and K that is a number.

// Func should return the index of 2 numbers from array that in sum will be equal to K
// Should be diffrent index
// In case if no match should return empty array

const array = [2, 1, -4, 5, 6, 7, 2, 3, 4]

function getIndex(array, k) {
    const newArray = []
    array.forEach((element, index) => {
        array.forEach((element2, index2) => {
            if ((index2 > index) && (element + element2 == k)) {
                newArray.push({ index, index2 })
            }
        });
    });
    return newArray
}

console.log(getIndex(array, 10))