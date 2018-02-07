type Pizza = { name: string, toppings: number };

const pizza: Pizza = { name: 'BLazing Inferno', toppings: 5 };

// pass this object into a json string then pass it back into a JS object
// tell TS when we convert this string back into a JS object, that it will indeed be a Pizza object

const serialized = JSON.stringify(pizza);

// in this case the parse is using the type :any, and the autocomplete doesn't offer name and toppings
// when typing after the .

// function getNameFromJSON(obj: string): Pizza {
//     return JSON.parse(obj).name;
// }

// getNameFromJSON(serialized);

// ----- Solutions:
// old way of doing things, but this can be confused with JSX

// function getNameFromJSON(obj: string) {
//     return (<Pizza>JSON.parse(obj)).name;
// }

// getNameFromJSON(serialized);


// preferred way of doing it:

function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza ).name;
}

getNameFromJSON(serialized);
