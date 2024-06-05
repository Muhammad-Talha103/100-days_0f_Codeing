// Question 147: Explain how to handle errors in a callback pattern.
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello World");
    }, 1000);
});
myPromise.then(function (res) { return console.log(res); }).catch(function (err) { return console.log(err); });
