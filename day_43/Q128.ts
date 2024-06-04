// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiply = (num1: number, num2: number, num3: number): number => {
    return num1 * num2 * num3;
}

console.log(multiply(1, 2, 3)); // 6