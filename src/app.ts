function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 25));

// Adding defaults

function multiply2 (a, b = 25) {
    return a * b;
}

console.log(multiply2(5));

// override the default

console.log(multiply2(5, 35));
