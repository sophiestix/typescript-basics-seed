const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

// arrow functions

const mappedPizzas = pizzas.map(pizza => {
    return pizza.name.toUpperCase();
});

console.log(mappedPizzas);

// implicit returns
const implicitPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(implicitPizzas);

// --------- example 1

const pizza = {
    name: "Blazing Inferno",
    getName: function() {
        console.log(this); // this returns: {name: "Blazing Inferno", getName: ƒ}
    }
};

console.log(pizza.getName());

// --------- example 2

// const pizza2 = {
//     name: "Blazing Inferno",
//     getName: function() {
//         setTimeout(function() {
//             console.log(this); // now 'this' is connected to the setTimeout and not the pizza2. Scope!!!
//         }, 100);
//     }
// };

// --------- example 3

// But with arrow functions, it will work:

const pizza3 = {
    name: "Blazing Inferno",
    getName: function() {
        setTimeout(() => {
            console.log(this.name); // now 'this' will return the pizza3, "inherits" the scope
        }, 100);
    },
};

console.log(pizza3.getName());

// --------- example 4

const pizza4 = {
    name: "Blazing Inferno",
    getName: () => pizza.name,
};

console.log(pizza4.getName());

// --------- example 5

const pizza5 = {
    name: "Blazing Inferno",
    getName: function () {
        console.log(this.name);
    },
};

console.log(pizza5.getName());
