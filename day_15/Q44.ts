

function sandwich(...items:string[]){
    return `Making Your Sandwich with ${items.join(" , ")}`
}

console.log(sandwich("Cheese", "Bread", "Tomato slices"));
console.log(sandwich("Ham" , "Cheese"));
console.log(sandwich("Mustard" , "mayonnaise "));
