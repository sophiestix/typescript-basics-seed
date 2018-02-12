class Pizza {
    constructor(private name: string, private price: number) {}
}

// class List {
//     private list: any[]; // allow us to pass type information between members

//     addItem(item: any): void {
//         this.list.push(item);
//     }

//     getList(): any[]{
//         return this.list;
//     }
// }

// Using a generic

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
// list.addItem(new Coupon()); // what if we accidently add an other class to the List. Generics come to the rescue
// list.addItem({ coupon: 'pizza25' });

const pizzas = list.getList();

class Coupon {
    constructor(private name: string) {}
}
const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'));
