// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

function getDay(day: number) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
    }
}

console.log(getDay(1));

console.log(getDay(2));

console.log(getDay(3));

console.log(getDay(4));

console.log(getDay(5));

console.log(getDay(6));

console.log(getDay(7));
