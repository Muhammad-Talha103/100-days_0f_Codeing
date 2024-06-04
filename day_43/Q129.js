// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var add = function (a, b) { return a + b; };
console.log(add(1, 2)); // 3
var subtract = function (a, b) { return a - b; };
console.log(subtract(1, 2)); // -1
var multiply = function (a, b) { return a * b; };
console.log(multiply(1, 2)); // 2
var divide = function (a, b) { return a / b; };
console.log(divide(1, 2)); // 0.5
