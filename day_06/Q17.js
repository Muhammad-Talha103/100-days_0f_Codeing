//Answer 16
var guestList = ["Muhammad Talha", "Faiz Raza", "Saim raza"];
guestList.forEach(function (guestList) {
    console.log("Good news ".concat(guestList, "! Now we have bigger table for dinner."));
});
guestList.unshift("Khursheed Alam");
guestList.splice(guestList.length / 2, 0, "Junaid Khan");
guestList.push("Daniyal raza");
guestList.forEach(function (guestList) {
    console.log("Hello ".concat(guestList, "! you are invited to dinner."));
});
// Answer 17
guestList.forEach(function (guestList) {
    console.log("Sorry ".concat(guestList, ",I can invited only two people for dinner."));
});
while (guestList.length > 2) {
    var remove = guestList.pop();
    console.log("I can't invite you to dinner ".concat(remove));
}
guestList.forEach(function (guestList) {
    console.log("Hey ".concat(guestList, "! You are still invited to dinner"));
});
guestList.splice(0, guestList.length);
console.log(guestList);
