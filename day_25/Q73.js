// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
function UpdateNumbers() {
    var number = 100;
    console.log("Initial number = ".concat(number));
    number = 200;
    console.log("Updated number = ".concat(number));
}
UpdateNumbers();
