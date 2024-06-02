
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function removeBanana(banana: string[]){
    banana.toLocaleString().toLowerCase();
    let BananaIndex = banana.indexOf("Banana")

    if (BananaIndex !== -1) {
        banana[BananaIndex] = "Mango"
    }
    else {
        return `banana not found`
    }
}
  
let fruits:string[]=["Apple", "Banana", "Orange", ]

removeBanana(fruits);

console.log(fruits);

