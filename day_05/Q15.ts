
//Answer 14

let GuestList:string[]=["Muhammad Talha","Faiz Raza","Saim raza"];

for(let guestList of GuestList){
    console.log(`Dear ${guestList}! You Are Cordially Invited To Dinner.`);
}

//Answer 15

let Guestcantmake = GuestList[1]

console.log(Guestcantmake + " Can't make it to the Dinner");

// Step 2: Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

GuestList[1] = "Junaid khan";

console.log(GuestList);

// Step3 :• Print a second set of invitation messages, one for each person who is still in your list.

GuestList.forEach(InvitedGuest => {
    console.log("Dear "+ InvitedGuest + "! You Are Cordially Invited To Dinner On 14-February-2024 at 9:00 PM.")
 })
