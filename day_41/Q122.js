// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
var i = 10;
while (i > 0) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i--;
}
// Output: 10, 9, 8, 7, 6, 5
