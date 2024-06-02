// Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.
function round(num) {
    return Math.round(num * 100) / 100;
}
console.log(round(3.14159)); // 3.14
function round1(num) {
    return Number(num.toFixed(2));
}
console.log(round(3.14159)); // 3.14
