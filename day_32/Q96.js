// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
console.log(sum); // 15
