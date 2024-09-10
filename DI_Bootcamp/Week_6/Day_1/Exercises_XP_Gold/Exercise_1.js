const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);  // Output: [3, 42, "foo"]
  })
  .catch(error => {
    console.error(error);
  });

/*
  Explanation:
  - `Promise.all` takes an array of promises (or values) and returns a single promise.
  - This returned promise resolves when all of the input promises have resolved.
  - The resolved value is an array of the resolved values of the input promises, in the same order as the input array.
  - If any of the input promises reject, `Promise.all` immediately rejects with the reason of the first promise that rejects.
  - In this example:
    - `promise1` resolves immediately with the value 3.
    - `promise2` is a regular value (not a promise), so it is treated as a resolved promise with the value 42.
    - `promise3` resolves after 3 seconds with the value "foo".
  - Since all promises resolve successfully, the output is `[3, 42, "foo"]`.
*/
