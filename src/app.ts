let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => {
    return x * y;
};

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);
