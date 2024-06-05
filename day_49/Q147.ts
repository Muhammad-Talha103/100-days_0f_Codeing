// Question 147: Explain how to handle errors in a callback pattern.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 1000);
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
