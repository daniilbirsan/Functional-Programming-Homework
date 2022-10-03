// Sort array with numbers even asc odd desc [4, 5, 3, 6, 7, 1, 2, 9, 8] => [2, 4, 6, 8, 9, 7, 5, 3, 1]

const array = [4, 5, 3, 6, 7, 1, 2, 9, 8]

function sortArray(array) {
    const even = array.filter(a => a % 2 == 0).sort();
    const odd = array.filter(a => a % 2 != 0).sort().reverse();
    return [...even, ...odd];
}

console.log(sortArray(array))