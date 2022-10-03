// Impliment map, filter, every, some, find, indexOf with .reduce(). could be used as other array methods

const arrayWithData = [22, 20, 21, 22, 22, 23];

function map(array, someFunction) {
    return array.reduce((newArray, arrayItem) => {
        newArray.push(someFunction(arrayItem));
        return newArray;
    }, []);
};

function filter(array, someFunction) {
    return array.reduce((newArray, arrayItem) => {
        if (someFunction(arrayItem)) {
            newArray.push(arrayItem);
        }
        return newArray;
    }, []);
};

function every(array, someFunction) {
    return array.reduce((result, arrayItem) => {
        if (!someFunction(arrayItem) && result) {
            return false;
        }
        return result;
    }, true);
};

function some(array, someFunction) {
    return array.reduce((result, arrayItem) => {
        if (someFunction(arrayItem) && !result) {
            return true;
        }
        return result;
    }, false);
};

function find(array, someFunction) {
    return array.reduce((result, arrayItem) => {
        if (someFunction(arrayItem) && !result) {
            return arrayItem;
        }
        return result;
    }, undefined);
};

function indexOf(array, elementToFind, startIndex) {
    return array.reduce((result, arrayItem, index) => {
        if(typeof(startIndex) === "number" && startIndex != 0){
            if (elementToFind === arrayItem && index >= startIndex) {
                return index;
            }
        }else{
            if (elementToFind === arrayItem && result === -1) {
                return index;
            }
        }
        return result;
    }, -1);
};

console.log("Map method (add +1 to each element of the array)", map(arrayWithData, ((item) => item + 1))) // expected output [ 23, 21, 22, 23, 23, 24 ]

console.log("Filter method (check if item is equal with 23)", filter(arrayWithData, ((item) => item == 23))) // expected output [23]

console.log("Every method (check if every item is smaller than 24)", every(arrayWithData, ((item) => item < 24))) // expected output true

console.log("Some method (check if any item is equal whit 25)", some(arrayWithData, ((item) => item === 25))) // expected output false

console.log("Find method (return the first value that is smaller than 24)", find(arrayWithData, ((item) => item < 24))) // expected output 22

console.log("IndexOf method (return the first index of the item in the array also you can have the posibility to select statIndex)", indexOf(arrayWithData, 21, 2)) // expected output 2