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

### Function Types

```
let sumOrder: Function;
sumOrder = (price: number, quantity: number): number => {
    return price * quantity;
}

OR

let sumOrder: (price: number, quantity: number) => number;
sumOrder = (x, y) => x * y;

const sum = sumOrder(25, 2);
console.log(`Total sum: ${sum}`);
```

### Functions and Optional Arguments

What if we want to pass only one argument, but 2 was defined earlier?
```
et sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);
```

### Typed Functions and Default Params

The above example with the `?` added in the arguments actually throws an error on the `y` in the `sumOrder` function, because it thinks it has an undefined type.

What we can do is, is to give a default number `1` to the `y` when passing it into the function, to keep its number type. This means that 25 will be simply multiplied by 1 when not passing a second argument.
```
let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => {
    return x * y;
};

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);
```

### Object Types

What if we want to define how our object looks like up front?
Define what properties are available for an object.
```
let pizza: {name: string; price: number; getName(): string} = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    }
};

console.log(pizza.getName());
```

### Array Types and Generics

Implied string array
```
const sizes = ['small', 'medium', 'large'];
```

Explicit string  or number array
```
let sizes2: string[];
sizes2 = ['small', 'medium', 'large'];

let numbers: number[];
numbers = [1, 2, 3];
```

Generic Types
```
// let toppings: string[];
// new Array();
let toppings: Array<string>; //generic types

toppings = ['pepperoni', 'tomato', 'bacon'];
```

### Tuple Types for Arrays

Tuple type allow us to suggest to Typescript that we have some kind of data structure inside of an array that's made up of different types.
Only use this when we are absolutely sure how the object/datastructure will look like.
```
let pizza: [string, number, boolean];
pizza = ['Pepperoni', 20, true];
```

## Type Aliases and Assertions

### Type Aliases

Basic example with seemingly lot of repetitions:
```
let PizzaSize: 'small' | 'medium' | 'large' = 'small';

const selectSize = (size: 'small' | 'medium' | 'large') => {
    PizzaSize = size;
};

selectSize('small');
```

But this is very repetitive, so:
```
type Size = 'small' | 'medium' | 'large'; // you can export it and use it in other files too
type Callback = (size: Size) => void;

let PizzaSize: Size = 'small';

const selectSize = (size: Size) => {
    PizzaSize = size;
};

selectSize('medium');
```

Even one more thing to make it more simpler:
```
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let PizzaSize: Size = 'small';

const selectSize: Callback = (x) => {
    PizzaSize = x;
};

selectSize('medium');
```

### Type Assertions

We instruct TS about that we know more about the types that would potentially would be coming back from a dataset or function call.

For example, pass an object into a json string then pass it back into a JS object.
Tell TS when we convert this string back into a JS object, that it will indeed be a Pizza object

```
type Pizza = { name: string, toppings: number };
const pizza: Pizza = { name: 'BLazing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza ).name;
}

getNameFromJSON(serialized);
```

## Exploring Enums

### Numeric Enums and Reverse Mappings

By default we get numeric values from enums.
```
enum Sizes {
    Small,      // Sizes[Sizes["Small"] = 0] = "Small";
    Medium,     // Sizes[Sizes["Medium"] = 1] = "Medium";
    Large       // Sizes[Sizes["Large"] = 2] = "Large";
}
```

These become values, like 0, 1, 2; e.g. "Small" becomes a property with the value of 0

We can access the numbers or values, but also the properties of the enum:
```
console.log(Sizes.Medium); // this gives us the number 1. kinda works like the indexes of an array -> reverse mapping

console.log(Sizes.Large, Sizes[Sizes.Large]); // gives 2 and "Large"
```

What if we want to add another to the enum? we have to give and "index" or "value" to the newcomer
```
enum Sizes {
    ExtraLarge = 3
}
```
Later if we want to use it in app, and we have the index/number of the thing we want to return, we can pass it in and get the property or value accordingly:
```
const selectedSize = 2;
console.log(Sizes[selectedSize]);
```

## String Enums and Inlining Members

Inline Member => by adding "const" in front, we will just get the inline values, makes the compiled
JS shorter and neater -> inlining the enum members

```
const enum Sizes {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
    selected = size;
}

updateSize(Sizes.Large);

console.log(selected);
```

## Diving into Interfaces

### Creating Interfaces
```
// type Pizza = {
//     name: string;
//     sizes: string[]
// };

interface Pizza {
    name: string;
    sizes: string[]
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
    }
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
```

### Interfaces with Function Types

We can either declare that we are returning a Pizza type/interface here:
```
function createPizza(name: string, sizes: string[]): Pizza {
    return {
        // logic
    }
}
```

or

``` 
function createPizza(name: string, sizes: string[]) {
    return {
        // logic
    } as Pizza;
}
```

See example:

```
interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSize(): string[];
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSize() {
            return this.sizes;
        }
    }
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
```

### Extending Interfaces

```
interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    getAvailableSize(): string[];
};
```

### Interfaces and Optional Properties

For example, we want to include a new property sometime along the way, but we are not sure yet. We can
make that property in the interface optional, with the help of an `?` after the name.

```
interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvailableSize(): string[];
};
```

### Interfaces with Index Signatures

Treating the datastructure as a dictionary.

```
interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvailableSize(): string[];
    [key: number]: string; // we have an index key, which is a number that will hold a string for an ID
};

pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz';
```

If a server return a unique ID as a string, you can use: `[key: string]: any;` , though it can be risky and prone to problems.

Another way to use it, it we want to extend the properties with more dynamic values later:
```
dictionary: {
    [key: string]: any;
}
```

## Classes, Properties and Inheritance

### Understanding Classes and Constructor

The old way of doing things:
```
function Pizza(name: string) {
    this.name = name;
    this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
    this.toppings.push(topping);
};

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
```

New way, use a class and constructor:
```
class Pizza {
    name: string;
    toppings: string[] = []; // after declaring it, default it to an empty array immediately

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}
const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
console.log(pizza);
```

### Public and Private Members

Private: internally to a function or a class
Public: you can access it from outside too

```
class Pizza {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    private addTopping(topping: string) {
        this.toppings.push(topping);
    }
}
const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni'); // now private is not available here

console.log(pizza);
```

So to have this:
```
class Pizza {
    public toppings: string[] = [];

    constructor(private name: string) {}

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }

    removeTopping() {}
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
```
will result in this:
```
var Pizza = /** @class */ (function () {
    function Pizza(name) {
        this.name = name;
        this.toppings = [];
    }
    Pizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    Pizza.prototype.removeTopping = function () { };
    return Pizza;
}());
var pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');
console.log(pizza);
```

`public` and `private` are optional, by default it is `public`.

### Readonly Members

It doesn't affect the compiled JS file, jsut like the private and public members.
``` 
constructor(readonly name: string) {}

console.log(pizza.name);
```

`Readonly` can be only initialized at the declaration! When we declare the property at the top, or
when we declare it inside the `constructor()`.

### Setters and Getters (Accessors)

Internal workings on how a property internally set.
They are always `public`.

Setting the value of a property:
```
element.className = 'abc';
```

Getter:
```
console.log(element.className);
```

```
class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes () {
        return this.sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);

// invoke getter
console.log(sizes.availableSizes); // ["small", "medium"]
// invoke setter
sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes); //["medium", "large"]
```

### Class Inheritence"

We are extended our `Pizza` class with the `Sizes` class. So any time we are creating a new instance
of Pizza, we are also extending our instance of the Sizes.

```
class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes); // need to supply the available sizes here
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }

    removeTopping() {}
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
```

### Abstract Classes

What happens if we create a new instance of `Sizes` by any chance and break things? We can make the
original `Sizes` into an abstract class, meaning it will be only used for extending from it further
down in our application. We don't want to invoke that class on its own.

```
abstract class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes () {
        return this.sizes;
    }
}
```

### Protected Members and Inheritance

Esentially we inherited the ability to access private members when we extend a class.
```
abstract class Sizes {
    constructor(protected sizes: string[]) {}
}

class Pizza extends Sizes {
    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes); // ["small", "medium"]

pizza.updateSizes(['large']);
console.log(pizza.availableSizes); // ["large"]
```

### Interface contracts with "implements"

When we have a setter and a getter, we can describe the property is available
and what it returns it's a string in an `interface`.

When implementing interfaces, the properties in the class should be public. Private or public members
cannot be added to the interface.

It could be an extra to check that we use the correct types in our application code.

```
interface SizesInterface {
    availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes () {
        return this.sizes;
    }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}
class Pizza extends Sizes implements PizzaInterface {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes); // need to supply the available sizes here
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes; // inherited and extended from the Sizes class
    }

    // etc code here
}
```

### Static Properties and Methods

Instance method:
```
const date = +new Date();
console.log(date); // 1518446890284 - it's a timestamp
```

Static method, when we don't create a new instance:
```
const date = Date.now();
console.log(date);
```

Like here, we don't need to create a new instance and call it: `new Coupon();` - we can just access
the `allowed` after a `.`:
```
class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
}

console.log(Coupon.allowed);
```

It is great for utility-type functions, e.g. prefixing things:
```
class Coupon {
    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.create(25)); // PIZZA_RESTAURANT_25
```

## Generics and Overloads

### Function Generics

We create some form of dynamic type.
Common example when we have a list, where we want to add items to the list and also retreive items from it.
```
class Pizza {
    constructor(private name: string, private price: number) {}
}

class List<T> { // T is a placeholder for a dynamic type
    private list: T[]; // allow us to pass type information between members

    addItem(item: T): void {
        this.list.push(item);
    }

    getList(): T[]{
        return this.list;
    }
}

const list = new List<Pizza>(); // supply the type when we call it
list.addItem(new Pizza('Pepperoni', 15));
```


"Defined any type" => when we start to use some kind of API, we will define the type at the point of call.
We don't just pass in any type, but rather something predefined.

### Function Overloads

Allows us to declare diff ways we could potentially use a function. Now the function may return different
types of objects based on the parameters that we supply to the function.

Function overload allows us to declare the diff types we pass in and the return types
The declarations won't get compiled into JS, just the main function.

```
function reverse(str: string): string;
function reverse(arr: any[]): any[];
function reverse(stringOrArray: string | any[]): string | any[] {
    // conditional check to see what we pass in
    if (typeof stringOrArray === 'string') {
        return stringOrArray
            .split('')
            .reverse()
            .join();
    }
    return stringOrArray.slice().reverse(); // we are creating a brand new copy of the passed-in function before slicing
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
```

Adding some Generics into the mix:
```
function reverse<T>(arr: T[]): T[];
```

