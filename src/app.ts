interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvailableSize(): string[];
    [key: number]: string; // we have an index key, which is a number that will hold a string for an ID
    // dictionary: {
    //     [key: string]: any;
    // }
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
pizza[1] = 'xyz';
pizza.toppings = 1;
