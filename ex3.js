// Object deep clone

const randomObject = {
    age: 21,
    name: undefined,
    nullValue: null,
    array: [2, 4, 8],
    someObject: {
        value: 'key'
    },
    bool: true,
    method: () => {
        return 'SomeValue'
    }
};

function clone(object) {
    console.log(typeof (function () { }))
    if (typeof object === 'object' && object != null) {
        const cloneobject = Array.isArray(object) ? [] : {};
        for (const key in object) {
            cloneobject[key] = clone(object[key]);
        }
        return cloneobject;
    } else {
        return object;
    }
};

console.log(clone(randomObject))