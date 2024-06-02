// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var wordLengths = words.map(function (word) { return word.length; });
console.log(wordLengths); // Output: [5, 5, 5, 9, 10, 7]    
