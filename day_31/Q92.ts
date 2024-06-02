// Question 92: Write a function to remove the last element from an array and return the removed element.

function RemovedLastElement(FruitsArr : string[]){
    return FruitsArr.pop()
}

let Fruits: string[] = ['Strawberry' , 'Apple' , 'Banana' , 'Cherry']
console.log(`Fruits Array : ${Fruits}`);
let RemovedFruits = RemovedLastElement(Fruits)
console.log(`Removed Fruit : ${RemovedFruits}`);
console.log(`Updated Fruits Array : ${Fruits}`);