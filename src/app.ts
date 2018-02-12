class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

// console.log(Coupon.allowed);
// we don't need to create a new instance and call it:
// new Coupon();

console.log(Coupon.create(25));
