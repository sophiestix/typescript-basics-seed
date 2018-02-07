// enum Sizes {
//     Small = 'small',    // Sizes["Small"] = "small"; => simple JS key=value pair
//     Medium = 'medium',
//     Large = 'large'
// }

// let selected: Sizes = Sizes.Small;

// function updateSize(size: Sizes): void {
//     selected = size;
// }

// updateSize(Sizes.Large);

// console.log(selected);


// Inline Member => by adding "const" in front, we will just get the inline values, makes the compiled
// JS shorter and neater -> inlining the enum members

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
