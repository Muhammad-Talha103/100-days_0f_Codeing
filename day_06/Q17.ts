//Answer 16


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

// Answer 17

guestList.forEach(guestList=>{
    console.log(`Sorry ${guestList},I can invited only two people for dinner.`);
})

while(guestList.length > 2){
    let remove = guestList.pop()
    console.log(`I can't invite you to dinner ${remove}`);
}

guestList.forEach(guestList=>{
    console.log(`Hey ${guestList}! You are still invited to dinner`);
})

guestList.splice(0,guestList.length)
console.log(guestList);
