// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function dayUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var timeLeft = newYear.getTime() - today.getTime();
    var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    return daysLeft;
}
console.log(dayUntilNewYear(), " days left until New Year!");
