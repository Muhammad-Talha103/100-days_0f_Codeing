// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
var numbers = [3, 4, 6, 8, 11, 15, 18, 20, 23, 25, 27, 38, 49, 55, 67, 79, 82, 86, 91, 93, 97];
function filterNumbers(arr) {
    return arr.filter(function (num) { return num > 10; });
}
console.log(filterNumbers(numbers));
