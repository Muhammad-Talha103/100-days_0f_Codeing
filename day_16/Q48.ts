
let price1=[1000,1500,2000,2500];
let price2=[3000,3500,4000,5000];

let combine=[...price1,...price2].sort((a,b) => a - b) 

console.log(combine);