const toppings = ['bacon', 'chili'];

const newToppings = ['pepperoni'];

// The Spread operator creates a copy into a single array. It doesn't keep the reference, it just copies the array
const allToppings = [...toppings, ...newToppings];

console.log(allToppings);

// easy to modify the order too:
const allToppings2 = [...newToppings, ...toppings];

console.log(allToppings2);

