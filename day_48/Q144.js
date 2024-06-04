// Question 144: Explain the use of the Promise.all() method with an example.
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 1');
    }, 1000);
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 2');
    }, 2000);
});
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise 3');
    }, 3000);
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // ['Promise 1', 'Promise 2', 'Promise 3']
});
