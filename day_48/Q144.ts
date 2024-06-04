// Question 144: Explain the use of the Promise.all() method with an example.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3');
    }, 3000);
});

Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values); // ['Promise 1', 'Promise 2', 'Promise 3']
});

