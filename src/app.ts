// let sumOrder: (price: number, quantity: number) => number;

// sumOrder = (x, y) => {
//     if (y) {
//         return x * y;
//     }
//     return x;
// };

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);

let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);
