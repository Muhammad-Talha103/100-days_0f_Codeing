// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let x = 10;

console.log(x);

x = 20;

console.log(x);

const y = 10;

try {
    y = 20
} catch (error) {
    console.log('Error Cannot Reassign because it is a constant');
}

