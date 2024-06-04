// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function age(age) {
    if (age < 13) {
        console.log("The person is a child");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager");
    }
    else {
        console.log("The person is an adult");
    }
}
age(12);
