// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Success");
    }, 2000);
});
promise.then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
