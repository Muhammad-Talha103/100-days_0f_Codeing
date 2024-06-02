// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDate()); // 28-12-2020
