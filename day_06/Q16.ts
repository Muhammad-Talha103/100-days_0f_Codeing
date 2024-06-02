
let guestList:string[]=["Muhammad Talha","Faiz Raza","Saim raza"];

guestList.forEach(guestList=>{
    console.log(`Good news ${guestList}! Now we have bigger table for dinner.`);
})


guestList.unshift("Khursheed Alam");

guestList.splice(guestList.length/2,0,"Junaid Khan");

guestList.push("Daniyal raza");

guestList.forEach(guestList=>{
    console.log(`Hello ${guestList}! you are invited to dinner.`);
})

