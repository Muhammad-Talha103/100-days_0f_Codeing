// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function getCurrentDate(): string {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDate()); // 28-5-2024

