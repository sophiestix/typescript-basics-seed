abstract class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes () {
        return this.sizes;
    }
}

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
console.log(pizza.availableSizes);
pizza.addTopping('pepperoni');
