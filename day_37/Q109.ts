// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

const time = new Date();

if (time.getTime() < 12) {
    console.log("Good Morning");
}

