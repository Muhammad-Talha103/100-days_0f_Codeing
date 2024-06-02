var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num.forEach(function (num) {
    var end;
    if (num === 1) {
        end = "st";
    }
    else if (num === 2) {
        end = "nd";
    }
    else if (num === 3) {
        end = "rd";
    }
    else {
        end = "th";
    }
    console.log(num + end);
});
