// Question 146: Show an example of a callback function used to filter an array of numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbers(arr: number[], callback: (num: number) => boolean): number[] {
    return arr.filter(callback);
}

console.log(filterNumbers(numbers, num => num > 5)); // [6, 7, 8, 9, 10]

