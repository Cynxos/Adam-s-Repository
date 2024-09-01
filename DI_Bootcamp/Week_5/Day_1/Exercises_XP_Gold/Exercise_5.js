const compose = (f, g) => (a) => f(g(a));

const add1 = (num) => num + 1;
const add5 = (num) => num + 5;

compose(add1, add5)(10);

// add5(10) is evaluated first, resulting in 15.
// add1(15) is then evaluated, resulting in 16.