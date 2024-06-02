// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeadders(number) {
    return function (num) {
        return num + number;
    };
}
console.log(makeadders(10)(20));
