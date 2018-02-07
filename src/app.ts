// let PizzaSize: 'small' | 'medium' | 'large' = 'small';

// const selectSize = (size: 'small' | 'medium' | 'large') => {
//     PizzaSize = size;
// };

// selectSize('small');

//But this is very repetiticve, so:

type Size = 'small' | 'medium' | 'large'; // you can export it and use it in other files too
type Callback = (size: Size) => void;

let PizzaSize: Size = 'small';

// const selectSize = (size: Size) => {
//     PizzaSize = size;
// };

const selectSize: Callback = (x) => {
    PizzaSize = x;
};

selectSize('medium');
