const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order(abc) {

}

order(pizza);

// Now after restructuring

const pizza2 = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order2({ name, toppings }) { //we create an object literal structure around it when passing, it creates properties and plus as variable names as well
    console.log(name, toppings);
}

order2(pizza2);


// rename the properties when passign them into a function
function order3({ name: pizzaName, toppings: pizzaToppings }){
    console.log(pizzaName, pizzaToppings);
};

order3(pizza2);


// return a new object with the new properties. we are asking for a property from an object and create a variable:
function order4({ name: pizzaName, toppings: pizzaToppings }){
    return { pizzaName, pizzaToppings };
};

const { pizzaName } = order4(pizza2);


// Destructure an array
const toppings = ['pepperoni', 'bacon', 'chili'];

const firstItem = toppings[0]; //instead, do this:

const [ first, second, third ] = toppings; // doesn't matter what you call them though, can be [a,b,c]

console.log(first, second, third); // this will show three independent string values, not an array in [] brackets


// Desctructure an array when passing into a function

function logToppings([ first, second, third ]: any) {
    console.log(first, second, third);
};

logToppings(toppings);
