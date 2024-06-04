// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

const add = (a: number, b: number) => a + b;

console.log(add(1, 2)); // 3

const subtract = (a: number, b: number) => a - b;

console.log(subtract(1, 2)); // -1

const multiply = (a: number, b: number) => a * b;

console.log(multiply(1, 2)); // 2

const divide = (a: number, b: number) => a / b;

console.log(divide(1, 2)); // 0.5
