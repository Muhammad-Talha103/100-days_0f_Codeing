// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.


function checkTextPresence(text: string): boolean {
    return text.includes("JavaScript");
}

console.log(checkTextPresence("I love JavaScript!")); // true


