// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err))