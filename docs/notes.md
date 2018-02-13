# Notes

* [Introduction](#introduction)
* [ES6/7 and TypeScript](#es67-and-typescript)
* [Primitive Types](#primitive-types)
* [Special Types](#special-types)
* [Type Aliases and Assertions](#type-aliases-and-assertions)
* [Exploring Enums](#exploring-enums)
* [Diving into Interface](#diving-into-interfaces)
* [Classes, Properties and Inheritance](#classes-properties-and-inheritance)
* [Generics and Overload](#generics-and-overloads)

## Introduction
### Installing Typescript / TypeScript compiler (tsc) and tsconfig
[files](https://github.com/sophiestix/typescript-basics-seed/commit/ab1f3f599d3b84c2f9e1b877e63fff9416283356)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/b999255b4630c67641fe10a68222e817cd33b53f)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/aca41d36c2ae1174b089a016b8aa91d835d6a729)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/9ece7ddb57821e5474fa2470b81f9de254dde569)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/4626ed5a05aa008f5a3c6a78d54943d49afbac4d)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/0edf9b155d614b58ed9227d71aa3f21534ab0e63)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/a27490222bcc501376eb52fd68adbcb4221f1aa5)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/352c5ad91acfda809e10b4ea6cd93a1241355334)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/eb404556bc8eafcedbb1d1c362e8ff3794b1b746)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/45127b452b3866483c8d5069911500020352857b)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/3681650ca4c0487468980783e83553dbf7348624)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/572b4695eeaebe45dac01a1ccc4aeecc43199ff4)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/4f3541b0e26f9e041b62bf320acf1e1251e95fde)

The diff is whether we let typescript to assume a type or excplicitly state the type upfront.
```
let implicitCoupon = 'pizza25'; // typescript assumes it is a string
let explicitCoupon: string = 'pizza25';
```

### Void Type
[files](https://github.com/sophiestix/typescript-basics-seed/commit/a4fa6d74267c549352734a231bb7f82a0121ec87)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/891f33d6bb198043ff7017e9989fb1d766c6c77b)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/06b48f3009247e9bea5a1440bf1ef24aea4331a1)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/251ca65dad1071f14c80a3fc722292ab0e431123)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/b23746ec609e4075521d83b4b941204f7927e790)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/20f557043f1db4fa8cf8238f04941dfa35b95cbf)

What if we want to pass only one argument, but 2 was defined earlier?
```
et sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);
```

### Typed Functions and Default Params
[files](https://github.com/sophiestix/typescript-basics-seed/commit/0e35c71d938d587c20a55754384b4b17ae394d9e)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/4ef608855b77d6aa29713e5333c36757821ba00f)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/a272972c5e664601d61c8c43f0c07692c6bf78f7)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/a3d83fcaf1d944836a11f60fc2fcb3376685def1)

Tuple type allow us to suggest to Typescript that we have some kind of data structure inside of an array that's made up of different types.
Only use this when we are absolutely sure how the object/datastructure will look like.
```
let pizza: [string, number, boolean];
pizza = ['Pepperoni', 20, true];
```

## Type Aliases and Assertions

### Type Aliases
[files](https://github.com/sophiestix/typescript-basics-seed/commit/aac3a266fd9cb55142e0f0d053814fac1d2a759c)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/38a2303f0f46ff8d4785dc6f0dc7b5973643aa43)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/a54da6b07d9e0b279341ce1804f499fae8766887)

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

### String Enums and Inlining Members
[files](https://github.com/sophiestix/typescript-basics-seed/commit/7456cbb3cfc420347982cc02272be789d07e1856)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/ba0973a45dc58f045ebadffcef92a0d61895e592)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/4dde2d1c68efb8fa4231a82ad69793b2bccf1f8c)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/fe889ec5e0c8c989fd1d1487b2660ae03907d5b2)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/6f7d4b472780857ab82133b61fe748008df243e5)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/b7ed2058b4687033d9c92368e2fb0990827bac0c)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/b9b86f6274527181f5d34a1dffc92c9799b0bbd4)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/201a19b71dc570389455fb7d01f8d474bb78038b)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/1c5bbc413f68d6c0ac575b941a0c62103ad181ed)

It doesn't affect the compiled JS file, jsut like the private and public members.
``` 
constructor(readonly name: string) {}

console.log(pizza.name);
```

`Readonly` can be only initialized at the declaration! When we declare the property at the top, or
when we declare it inside the `constructor()`.

### Setters and Getters (Accessors)
[files](https://github.com/sophiestix/typescript-basics-seed/commit/a4d1012d7dc785018864d5a7f63a756f83c7722e)

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

### Class Inheritance
[files](https://github.com/sophiestix/typescript-basics-seed/commit/b5fe48e4a6b49ae0590320ec30a32bb20a0e321a)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/3282a09b518830c3f9f55c7c99607f76a0e14eb1)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/8b14e8ee842c2194268695f9086c02125e610b9c)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/f0bf9b1a34f170ad65972566abd8c9f27dccfcfc)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/2091d09ba01a5737f452305d0a1907c07350e846)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/1b77a5bf524048334e64150bd8581fe67e76d81e)

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
[files](https://github.com/sophiestix/typescript-basics-seed/commit/0a82f584a4253a7a65607a83bb7f691564ac3847)

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

