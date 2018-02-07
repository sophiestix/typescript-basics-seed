// by default we get numeric values from enums

enum Sizes {
    Small,      // Sizes[Sizes["Small"] = 0] = "Small";
    Medium,     // Sizes[Sizes["Medium"] = 1] = "Medium";
    Large       // Sizes[Sizes["Large"] = 2] = "Large";
}

// these become values, like 0, 1, 2
// for ex "Small" becomes a property with the value of 0

console.log(Sizes.Medium); // this gives us the number 1. kinda works like the indexes of an array -> reverse mapping

console.log(Sizes.Large, Sizes[Sizes.Large]); // gives 2 and "Large"


// what if we want to add another to the enum
// we have to give and "index" or "value" to the newcomer
enum Sizes {
    ExtraLarge = 3
}

const selectedSize = 2;

console.log(Sizes[selectedSize]);


