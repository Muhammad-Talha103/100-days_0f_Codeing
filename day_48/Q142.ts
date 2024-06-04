// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

console.log(promise);


