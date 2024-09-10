function resolveAfter4Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    });
}

resolveAfter4Seconds().then(message => console.log(message));  // Output after 4 seconds: success
