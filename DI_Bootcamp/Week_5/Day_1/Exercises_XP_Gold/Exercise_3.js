const curriedSum = (a) => (b) => a + b;

curriedSum(30)(1);

// The outcome of the last line curriedSum(30)(1) will be 31.