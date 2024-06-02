// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divide(num1, num2) {
    return {
        quotient: num1 / num2,
        remainder: num1 % num2
    };
}
console.log(divide(89, 78));
