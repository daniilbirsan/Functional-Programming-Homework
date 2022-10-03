// Sort array of objects function by name/age (asc/desc)

const users = [
    { name: 'John', age: 40 },
    { name: 'Daniil', age: 21 },
    { name: 'Maria', age: 60 }
]

function sort(array, byValue, asc) {
    return array.sort((firstValue, secondValue) => {
        const isGreater = firstValue[byValue] > secondValue[byValue] ? 1 : -1;
        return asc ? isGreater : -isGreater
    })
}

console.log(sort(users, 'name', true))