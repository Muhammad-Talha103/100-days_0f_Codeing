// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function removeBanana(banana) {
    banana.toLocaleString().toLowerCase();
    var BananaIndex = banana.indexOf("Banana");
    if (BananaIndex !== -1) {
        banana[BananaIndex] = "Mango";
    }
    else {
        return "banana not found";
    }
}
var fruits = ["Apple", "Banana", "Orange",];
removeBanana(fruits);
console.log(fruits);
