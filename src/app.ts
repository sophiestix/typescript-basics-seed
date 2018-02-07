let PizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    PizzaSize = size;
}

selectSize('meduim'); // it will underline it when misspelled or not matching the de suggestions above

selectSize('medium');

console.log(`Pizza size: ${PizzaSize}`);
