var guestList = ["Muhammad Talha", "Faiz Raza", "Saim raza"];
guestList.forEach(function (guestList) {
    console.log("Good news ".concat(guestList, "! Now we have bigger table for dinner."));
});
guestList.unshift("Khursheed Alam");
guestList.splice(guestList.length / 2, 0, "Junaid Khan");
guestList.push("Daniyal raza");
guestList.forEach(function (guestList) {
    console.log("Hello ".concat(guestList, "! you are invited to dinner."));
});
