// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObject(obj: object) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

logObject({
    name: "John",
    age: 34,
    city: "New York"
});

