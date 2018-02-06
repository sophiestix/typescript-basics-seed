// const pizza = {
//     name: "Pepperoni",
//     price: 15,
//     getName: function() {
//         return this.name;
//     }
// };

const pizza = {
    name: "Pepperoni",
    price: 15,
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());

const toppings = ["pepperoni"];

// Creating a new object based on another object

const order = { pizza, toppings };

console.log(order);

// move the order into a function

function createOrder() {
    return { pizza, toppings};
}

console.log(createOrder(pizza, toppings));
