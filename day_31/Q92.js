// Question 92: Write a function to remove the last element from an array and return the removed element.
function RemovedLastElement(FruitsArr) {
    return FruitsArr.pop();
}
var Fruits = ['Strawberry', 'Apple', 'Banana', 'Cherry'];
console.log("Fruits Array : ".concat(Fruits));
var RemovedFruits = RemovedLastElement(Fruits);
console.log("Removed Fruit : ".concat(RemovedFruits));
console.log("Updated Fruits Array : ".concat(Fruits));
