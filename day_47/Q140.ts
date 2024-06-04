// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.

let let = 10;

console.log(let); // Output: 10


function let() {
    console.log("Hello World");
}

let(); // Output: Hello World

