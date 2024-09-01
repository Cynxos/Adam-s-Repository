const curriedSum = (a) => (b) => a + b;

const add5 = curriedSum(5);

add5(12); //When add5(12) is called, it adds 12 to 5 (the value of a from the previous step).
