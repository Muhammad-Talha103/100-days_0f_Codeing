// Question 104: Create a function that generates a random hexadecimal color code.

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomHexColor());