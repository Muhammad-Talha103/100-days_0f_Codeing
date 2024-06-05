// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before Callback");

setTimeout(function () {
    console.log("After Callback");
}, 1000);

console.log("After Callback");

