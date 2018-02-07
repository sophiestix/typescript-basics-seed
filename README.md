<h1 align="center">
<img width="40" valign="bottom" src="https://ultimateangular.com/assets/img/categories/typescript.svg">
TypeScript: Basics Course Seed
</h1>
<h4 align="center">Project seed for our comprehensive introduction to TypeScript course.</h4>

---

<a href="https://ultimateangular.com" target="_blank"><img src="https://ultimateangular.com/assets/img/banner.jpg"></a>

---

> This repo serves as the seed project for Ultimate Angular's TypeScript Basics course as well as the final solution in stepped branches, come and [learn TypeScript](https://ultimateangular.com/courses/) with us!

[Setup and install](#setup-and-install) | [Tasks](#tasks) |
[Resources](#resources)

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or
simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

2. Install TypeScript globally via `npm i -g typescript`

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <typescript-basics-seed>
yarn install
# OR
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start
# OR
npm start
```

Visit `localhost:3000` to start building.

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

## Resources

There are several resources used inside this course, of which you can read
further about to dive deeper or understand in more detail what they are:

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)

# Notes

## Introduction
### Installing Typescript / TypeScript compiler (tsc) and tsconfig

```
tsc -version
```

```
tsc --init
```
This creates a `tsconfig.json` file, where we can delete all the commented-out lines to keep it neat.

In the terminal, to compile typescript according to the `<script>` in the `index.html`:
```
tsc --outDir dist
```

OR

in the `tsconfig.json` file add
```
"outDir": "dist"
```
and then just run
```
tsc
```

To set up watch mode:
```
tsc -w
```

### Setting up Webpack for TypeScript

Create a `webpack.config.js` file.

Then install devDependencies
```
yarn install
```
```
yarn start
```

With webpack we dont really need a `dist` folder because webpack will virtually use the output we
defined in the `output` in the config file. So we won't need to have the `./dist` in the `dist/app/js`
in the `<script>` tag in `index.html` anymore.

## ES6/7 and TypeScript

### Arrow functions and implicit returns

```
const pizza3 = {
    name: "Blazing Inferno",
    getName: function() {
        setTimeout(() => {
            console.log(this.name); // now 'this' will return the pizza3, "inherits" the scope
        }, 100);
    },
};

console.log(pizza3.getName());
```

```
const pizza4 = {
    name: "Blazing Inferno",
    getName: () => pizza.name,
};

console.log(pizza4.getName());
```

### Default function parameters

```
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
```

### Object literal improvements

Turn the classic
```
const pizza = {
     name: "Pepperoni",
     price: 15,
     getName: function() {
         return this.name;
     }
};
```
into:
```
const pizza = {
    name: "Pepperoni",
    price: 15,
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());
```

Creating a new object based on another object
```
const toppings = ["pepperoni"];

const order = { pizza, toppings };

console.log(order);
```

Move the order into a function
```
function createOrder() {
    return { pizza, toppings};
}

console.log(createOrder(pizza, toppings));
```

### Rest Parameters

What if we have an indefinite amount of arguments
```
function sumAll2(message, ...arr) {
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
}

const sum2 = sumAll2('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum2);
```

### Array and Object Spreads

```
const toppings = ['bacon', 'chili'];
const newToppings = ['pepperoni'];
```

The Spread operator creates a copy into a single array. It doesn't keep the reference, it just copies the array
```
const allToppings = [...toppings, ...newToppings];
console.log(allToppings);

----
zsofias-mbp:typescript-basics-seed zsofiahelmeczi$ node dist/app.js
[ 'bacon', 'chili', 'pepperoni' ]
```

It's easy to modify the order too:
```
const allToppings2 = [...newToppings, ...toppings];
console.log(allToppings2);

----
zsofias-mbp:typescript-basics-seed zsofiahelmeczi$ node dist/app.js
[ 'bacon', 'chili', 'pepperoni' ]
[ 'pepperoni', 'bacon', 'chili' ]
```

### Destructuring Objects

To pluck out things from objects we don't need

Base:
```
const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order(abc) {}

order(pizza);
```

Now after restructuring, we create an object literal structure around it when passing into a function, and it creates properties and plus as variable names as well
```
const pizza2 = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order2({ name, toppings }) {
    console.log(name, toppings);
}

order2(pizza2);
```

We can also rename the properties when passign them into a function
```
function order3({ name: pizzaName, toppings: pizzaToppings }){
    console.log(pizzaName, pizzaToppings);
};

order3(pizza2);
```

We can return a new object with the new properties. we are asking for a property from an object and create a variable:
```
function order4({ name: pizzaName, toppings: pizzaToppings }){
    return { pizzaName, pizzaToppings };
};

const { pizzaName } = order4(pizza2);
```

Destructure an array
```
const toppings = ['pepperoni', 'bacon', 'chili'];
```
Originally to get the first item for example:
```
const firstItem = toppings[0];
```

Now:
```
const [ first, second, third ] = toppings; // doesn't matter what you call them though, can be [a,b,c]
console.log(first, second, third); // this will show three independent string values, not an array in [] brackets
```

Desctructure an array when passing into a function
```
function logToppings([ first, second, third ]: any) {
    console.log(first, second, third);
};

logToppings(toppings);
```

## Primitive Types

### Number Type

Don't mistake it with the uppercase javascript types like `new Number();`.

Typescript keeps track of types, e.g. it would indicate that the string is not the expected number type in this case:
```
let pizzaCost = 10;
pizzaCost = '25';
```

You can set it already here:
```
let pizzaCost: number = 10;
```

```
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
};

const cost: number = calculatePrice(pizzaCost,pizzaToppings);
console.log(`Pizza costs: ${cost}`);
```

### String Type

```
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `
    Final coupon is ${normalizeCoupon(coupon)}
`;

console.log(couponMessage);
```

### Boolean type

```
const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
}

if (offerDiscount(pizzas)) {
    console.log(`You're entitled to a discount!`);
} else {
    console.log(`Order more than 3 pizzas for a discount!`);
}
```

## Special Types

### Any Type

If we don't supply a type for a variable, it will turn to `any` by default. It won't change even if we assign a number to the variable, like here:

```
let coupon; // type is any
coupon = 25; // type is still any
coupon = 'pizza25'; // type is still any
coupon = true; // type is still any
```
One reason to use they any type is e.g. when you migrate an old javascript application into typescript
and don't want to dive into the very details yet.

### Implicit vs Explicit Types

The diff is whether we let typescript to assume a type or excplicitly state the type upfront.
```
let implicitCoupon = 'pizza25'; // typescript assumes it is a string
let explicitCoupon: string = 'pizza25';
```

### Void Type

Kinda the opposite of `any`, it is great for functions. In cases when the function for ex doesn't return
anything, but rather will be reused later.

```
let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);
```

### Never Type

Telling the tsc that the value will never occure. When the return type never actually returns something
or for ex an error will be thrown, which means that we will never continue down with that particular code.

```
function orderError(error: string): never {
    throw new Error(error);
    // never going to return a value!
}

orderError('Something went wrong');
```

### Null, Undefined, Strick Null checks

In the `tsconfig.json` file, you can override the `strict: true` with `strictNullCheck: true` to be able to reassign `null` in to a for ex `:string` type variable:
```
let coupon: string = 'pizza25';

function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);
removeCoupon();
console.log(coupon);
```

Other workaround can be to use the `|` to add it to the type:
```
let coupon: string | null = 'pizza25';
```

### Union and Literal Types

```
let PizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    PizzaSize = size;
}

selectSize('meduim'); // it will underline it when misspelled or not matching the de suggestions above

selectSize('medium');

console.log(`Pizza size: ${PizzaSize}`);
```

Works with strings, numbers, booleans... etc.

