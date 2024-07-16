const inputObj = { name: 'jhon', age: 25, city: 'new york' };

function capitalizeStrings(inputObj) {
    let newObj = {};
    for (let key in inputObj) {
        if (typeof inputObj[key] === 'string') {
            newObj[key] = inputObj[key].toUpperCase();
        } else {
            newObj[key] = inputObj[key];
        }
    }
    return newObj;
}
console.log(capitalizeStrings(inputObj)); // { name: 'JHON', age: '25', city: 'NEW YORK' }