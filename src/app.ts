function sumAll(arr) {
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(sum);


// What if we have an indefinite amount of arguments

function sumAll2(message, ...arr) {
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
}

const sum2 = sumAll2('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum2);

// So we don't have to use the 'arguments' parameter with indexes anymore:
function sumAll3(message, ...arr) {
    console.log(arguments[0]);
    return arr.reduce((prev, next) => prev + next);
}

const sum3 = sumAll3('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum3);
