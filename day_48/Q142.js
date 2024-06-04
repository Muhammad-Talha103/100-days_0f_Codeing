// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
console.log(promise);
