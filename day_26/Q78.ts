// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.


// function declaration

function square(num: number) {
    return num * num;
}

console.log(square(5));

// function expression

let square1 = function (num: number) {
    return num * num;
}

console.log(square1(5));


