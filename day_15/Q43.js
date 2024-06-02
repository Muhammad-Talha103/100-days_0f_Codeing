var magiciansArr = ["Lance Burton", "Shin Lim", "Juan Tamariz", "Derren Brown", "Criss Angel"];
function make_great(great) {
    return great.map(function (magic) { return magic + " The great"; });
}
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
var great_magician = make_great(magiciansArr);
console.log("Original magician : ");
show_magicians(magiciansArr);
console.log("Great magician :");
show_magicians(great_magician);
