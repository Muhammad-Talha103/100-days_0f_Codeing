// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.


function UpdateNumbers() {
    let number = 100
    console.log(`Initial number = ${number}`);

    number = 200
    console.log(`Updated number = ${number}`);
}
UpdateNumbers()