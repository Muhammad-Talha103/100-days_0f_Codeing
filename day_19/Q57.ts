let persentage:number[]=[88.5,72,56,98,56.25,81];

let average=persentage.reduce((total,grade)=>total+grade,0)/persentage.length

console.log(average);