function orderError(error: string): never {
    throw new Error(error);
    // never going to return a value!
}

orderError('Something went wrong');

// there is some unreachable code in the applocation
