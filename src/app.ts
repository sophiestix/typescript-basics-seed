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

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }

    removeTopping() {}
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

// console.log(pizza.sizes); //this refers to our abstract class, if the property there is public

console.log(pizza.availableSizes);

pizza.updateSizes(['large']);

console.log(pizza.availableSizes);
