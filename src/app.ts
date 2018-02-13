function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
    // conditional check to see what we pass in
    if (typeof stringOrArray === 'string') {
        return stringOrArray
            .split('')
            .reverse()
            .join();
    }
    return stringOrArray.slice().reverse(); // we are creating a brand new copy of the passed-in function before slicing
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);
