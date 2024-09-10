function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
// This function takes a number x and returns a promise that resolves with the value x * 2.

 const arr = [1, 2, 3];
 const promiseArr = arr.map(timesTwoAsync);
 
// arr is an array of numbers: [1, 2, 3].
// arr.map(timesTwoAsync) applies the timesTwoAsync function to each element of the array, resulting in an array of promises: [Promise, Promise, Promise].

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

// Promise.all(promiseArr) takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved.
// The resolved value is an array of the resolved values of the input promises.
// Since timesTwoAsync resolves each promise with the value x * 2, the promises in promiseArr will resolve to 2, 4, and 6 respectively.

// Therefore, the output of the code will be:
// [2, 4, 6]