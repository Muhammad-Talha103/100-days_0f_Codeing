// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

let str: string = "This is a string";

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        console.log(str[i]);
        break;
    }
}
