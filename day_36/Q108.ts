// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function isStringEquivalent(str1: string, str2: string): boolean {

    if(str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }

}

console.log(isStringEquivalent("Hello", "hello")); // true

console.log(isStringEquivalent("word", "World")); // false