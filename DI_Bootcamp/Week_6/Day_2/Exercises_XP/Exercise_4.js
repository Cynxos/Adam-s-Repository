function resolveAfter2Seconds() {
    // This function returns a new Promise that resolves with the string 'resolved' after 2 seconds (2000 milliseconds).
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

// This is an async function, which means it can use the await keyword to pause execution until a Promise is resolved.
// It first logs 'calling' to the console.
// Then, it waits for the resolveAfter2Seconds function to resolve and assigns the resolved value ('resolved') to the variable result.
// Finally, it logs the value of result to the console.

asyncCall();

// When asyncCall is invoked, it logs 'calling' immediately.
// After 2 seconds, it logs 'resolved'.
// So, the output of running this code will be:

// calling
// resolved